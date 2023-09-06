const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('In the middleware');
    next();

});

app.use((req,res,next) => {
    console.log('In the middleware');
    res.send('<h1>Hello from Express!</h1>');

});

const server = http.createServer(app);
     
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><h1>Welcome to server</h1></body>');
//         res.write('</html>');
//         res.end();

server.listen(4000);



