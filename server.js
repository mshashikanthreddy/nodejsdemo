const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

/* middleware works on the sequencial order and there is default '/' called automatically. so, if have prefernences to call other routes call at before it.*/

app.use('/add-product',(req, res, next) => {
    res.send(`<form action="/product" method="POST">Product Name:
    <input type="text" name="title">size:
    <input type="number" name="size"><button type="submit">Add Product</button>
    </form>`);
});

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req, res, next) => {
    res.send('<h1> Hello from Express!</h1>');
});




app.listen(4000);


