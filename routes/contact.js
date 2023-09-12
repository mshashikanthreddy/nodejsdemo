const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact');

router.get('/contactUs',contactController.getContact);

router.post('/contactUs',contactController.postContact);

module.exports = router;