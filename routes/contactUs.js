const express = require('express');
const router = express.Router();
const path = require('path');
const contacUsController = require('../controllers/contactUs')

router.get('/contactus',contacUsController.contactus);

module.exports = router;
