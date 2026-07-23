const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 4000,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: ['project', 'blog', 'service', 'achievement', 'testimonial', 'certificate', 'education', 'experience'],
    },
    tags: [{ type: String, trim: true }],
    image: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    link: {
      type: String,
      trim: true,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    metadata: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
