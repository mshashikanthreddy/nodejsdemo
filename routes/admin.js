const express = require('express');

const router = express.Router();


// /admin/add-product  => GET (implicitly checks the add-product as we use filter admin)
router.get('/add-product',(req, res, next) => {
    res.send(`<form action="/admin/add-product" method="POST">Product Name:
    <input type="text" name="title">size:
    <input type="number" name="size"><button type="submit">Add Product</button>
    </form>`);
});


// /admin/add-product => POST
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/shop/');
});


module.exports = router;