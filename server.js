const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

/* middleware works on the sequencial order and there is default '/' called automatically. so, if have prefernences to call other routes call at before it.*/

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);




