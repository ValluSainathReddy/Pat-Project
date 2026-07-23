const express = require('express');
const router = express.Router();

const portfolioRoutes = require('./portfolioRoutes');

router.use('/portfolio-items', portfolioRoutes);

module.exports = router;
