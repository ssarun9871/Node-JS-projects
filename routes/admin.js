const express = require('express');
const router = express.Router();
const adminController = require('../controllers/product');


router.get('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

module.exports = router;  