const { body, param, validationResult } = require('express-validator');

const validatePortfolioItem = [
  body('title').notEmpty().withMessage('Title is required').trim().isLength({ max: 120 }).withMessage('Title must be at most 120 characters'),
  body('description').notEmpty().withMessage('Description is required').trim().isLength({ max: 4000 }).withMessage('Description must be at most 4000 characters'),
  body('category').notEmpty().withMessage('Category is required').isIn(['project', 'blog', 'service', 'achievement', 'testimonial', 'certificate', 'education', 'experience']),
  body('tags').optional().isArray(),
  body('link').optional().isString(),
  body('featured').optional().isBoolean(),
];

const validateObjectId = [param('id').isMongoId().withMessage('Invalid id')];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors: errors.array() });
  }
  next();
};

module.exports = {
  validatePortfolioItem,
  validateObjectId,
  handleValidationErrors,
};
