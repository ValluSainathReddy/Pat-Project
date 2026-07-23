const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const PortfolioItem = require('../models/PortfolioItem');
const asyncHandler = require('../middlewares/asyncHandler');
const { optimizeImage, uploadImageToGridFS, deleteImageFromGridFS, removeFile } = require('../services/mediaService');
const upload = require('../config/upload');

const createPortfolioItem = asyncHandler(async (req, res) => {
  const payload = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    tags: req.body.tags || [],
    link: req.body.link || '',
    featured: req.body.featured === 'true' || req.body.featured === true,
    metadata: req.body.metadata ? JSON.parse(req.body.metadata) : {},
  };

  if (req.file) {
    const optimizedPath = await optimizeImage(req.file.path);
    const fileId = await uploadImageToGridFS(optimizedPath, req.file.originalname);
    payload.image = {
      type: 'gridfs',
      fileId: fileId.toString(),
      filename: req.file.originalname,
      url: `/api/portfolio-items/files/${fileId.toString()}`,
    };
    removeFile(optimizedPath);
    removeFile(req.file.path);
  }

  const item = await PortfolioItem.create(payload);

  res.status(201).json({ success: true, data: item });
});

const getPortfolioItems = asyncHandler(async (req, res) => {
  const { category, featured, page = 1, limit = 20 } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (featured !== undefined) filter.featured = featured === 'true';

  const currentPage = Math.max(parseInt(page, 10) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(limit, 10) || 20, 1), 100);

  const [items, total] = await Promise.all([
    PortfolioItem.find(filter)
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize),
    PortfolioItem.countDocuments(filter),
  ]);

  res.status(200).json({ success: true, data: items, pagination: { page: currentPage, limit: pageSize, total } });
});

const getPortfolioItemById = asyncHandler(async (req, res) => {
  const item = await PortfolioItem.findById(req.params.id);
  if (!item) {
    const error = new Error('Portfolio item not found');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({ success: true, data: item });
});

const updatePortfolioItem = asyncHandler(async (req, res) => {
  const item = await PortfolioItem.findById(req.params.id);
  if (!item) {
    const error = new Error('Portfolio item not found');
    error.statusCode = 404;
    throw error;
  }

  if (req.body.title) item.title = req.body.title;
  if (req.body.description) item.description = req.body.description;
  if (req.body.category) item.category = req.body.category;
  if (req.body.tags) item.tags = req.body.tags;
  if (req.body.link !== undefined) item.link = req.body.link;
  if (req.body.featured !== undefined) item.featured = req.body.featured === 'true' || req.body.featured === true;
  if (req.body.metadata) item.metadata = JSON.parse(req.body.metadata);

  if (req.file) {
    const optimizedPath = await optimizeImage(req.file.path);
    if (item.image?.fileId) {
      await deleteImageFromGridFS(item.image.fileId);
    }
    const fileId = await uploadImageToGridFS(optimizedPath, req.file.originalname);
    item.image = {
      type: 'gridfs',
      fileId: fileId.toString(),
      filename: req.file.originalname,
      url: `/api/portfolio-items/files/${fileId.toString()}`,
    };
    removeFile(optimizedPath);
    removeFile(req.file.path);
  }

  await item.save();
  res.status(200).json({ success: true, data: item });
});

const deletePortfolioItem = asyncHandler(async (req, res) => {
  const item = await PortfolioItem.findById(req.params.id);
  if (!item) {
    const error = new Error('Portfolio item not found');
    error.statusCode = 404;
    throw error;
  }

  if (item.image?.fileId) {
    await deleteImageFromGridFS(item.image.fileId);
  }
  await item.deleteOne();

  res.status(200).json({ success: true, message: 'Portfolio item deleted successfully' });
});

const getPortfolioFile = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    const error = new Error('File id is required');
    error.statusCode = 400;
    throw error;
  }

  if (!mongoose.connection.db) {
    const error = new Error('Database connection is not available');
    error.statusCode = 503;
    throw error;
  }

  const bucket = new GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
  const fileId = req.params.id;

  try {
    const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));
    res.set('Content-Type', 'image/jpeg');
    downloadStream.on('error', () => {
      res.status(404).json({ success: false, message: 'File not found' });
    });
    downloadStream.pipe(res);
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid file id' });
  }
});

module.exports = {
  createPortfolioItem,
  getPortfolioItems,
  getPortfolioItemById,
  updatePortfolioItem,
  deletePortfolioItem,
  getPortfolioFile,
  upload,
};
