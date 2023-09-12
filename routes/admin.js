const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


// /admin/add-product  => GET (implicitly checks the add-product as we use filter admin)
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,  'views' , 'add-product.html'));
});


// /admin/add-product => POST
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;