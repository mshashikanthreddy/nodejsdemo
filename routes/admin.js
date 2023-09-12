const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

// /admin/add-product  => GET (implicitly checks the add-product as we use filter admin)
router.get('/add-product',productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProduct);

module.exports = router;