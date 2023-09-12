const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router() ;

// Implicit  it takes as /shop/ 
router.get('/',productsController.getProducts);

module.exports = router;