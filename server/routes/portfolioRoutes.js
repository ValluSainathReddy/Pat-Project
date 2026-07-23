const express = require('express');
const router = express.Router();
const {
  createPortfolioItem,
  getPortfolioItems,
  getPortfolioItemById,
  updatePortfolioItem,
  deletePortfolioItem,
  upload,
} = require('../controllers/portfolioController');
const { validatePortfolioItem, validateObjectId, handleValidationErrors } = require('../validators/portfolioValidator');

router.get('/', getPortfolioItems);
router.get('/:id', validateObjectId, handleValidationErrors, getPortfolioItemById);
router.post('/', upload.single('image'), validatePortfolioItem, handleValidationErrors, createPortfolioItem);
router.put('/:id', upload.single('image'), validateObjectId, validatePortfolioItem, handleValidationErrors, updatePortfolioItem);
router.delete('/:id', validateObjectId, handleValidationErrors, deletePortfolioItem);

module.exports = router;
