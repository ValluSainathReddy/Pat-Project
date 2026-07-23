const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

const optimizeImage = async (filePath) => {
  const outputPath = path.join(path.dirname(filePath), `optimized-${path.basename(filePath)}`);

  await sharp(filePath)
    .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true })
    .toFile(outputPath);

  return outputPath;
};

const uploadImageToGridFS = async (filePath, originalName) => {
  if (!mongoose.connection.db) {
    throw new Error('Database connection is not available');
  }

  const bucket = new GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
  const fileStream = fs.createReadStream(filePath);
  const uploadStream = bucket.openUploadStream(originalName, {
    contentType: 'image/jpeg',
  });

  return new Promise((resolve, reject) => {
    fileStream.on('error', reject);
    uploadStream.on('error', reject);
    uploadStream.on('finish', () => resolve(uploadStream.id));
    fileStream.pipe(uploadStream);
  });
};

const deleteImageFromGridFS = async (fileId) => {
  if (!mongoose.connection.db || !fileId) return;

  const bucket = new GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
  await bucket.delete(fileId);
};

const removeFile = (filePath) => {
  if (!filePath) return;
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

module.exports = {
  optimizeImage,
  uploadImageToGridFS,
  deleteImageFromGridFS,
  removeFile,
};
