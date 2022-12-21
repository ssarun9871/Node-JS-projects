const express = require('express');
const router = express.Router();
const shopController = require('../controllers/product');

router.get('/',shopController.shop);

module.exports = router; 