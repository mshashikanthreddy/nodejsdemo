const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/contactUs',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contact.html'));
})

router.post('/contactUs',(req,res,next) => {
    res.redirect('/success');
})

router.get('/success',(req,res,next) => {
   res.send('<h1>Form is submitted successfully</h1>');
})


module.exports = router;