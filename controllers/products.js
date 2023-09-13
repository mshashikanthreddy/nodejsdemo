const Product = require('../models/product.js');

const path = require('path');

const rootDir = require('../util/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,  'views' , 'add-product.html'));
};


exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};


exports.getProducts  = (req, res, next) => {
    Product.fetchAll((products) => {
        res.sendFile(path.join(rootDir,'views','shop.html'));
        console.log(products);
    });
    
};

