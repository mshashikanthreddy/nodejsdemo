const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));

/* middleware works on the sequencial order and there is default '/' called automatically. so, if have prefernences to call other routes call at before it.*/

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(4000);



