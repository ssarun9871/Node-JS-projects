const express = require('express');
const router = express.Router();
const adminController = require('../controllers/product');


router.get('/add-product',adminController.adminGet);

router.post('/add-product',adminController.adminPost);

module.exports = router;  