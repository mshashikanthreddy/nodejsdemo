const express = require('express');

const router = express.Router() ;

// Implicit  it takes as /shop/ 
router.get('/',(req, res, next) => {
    res.send('<h1> Hello from Express!</h1>');
});

module.exports = router;