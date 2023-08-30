const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);
     
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><h1>Welcome to server</h1></body>');
//         res.write('</html>');
//         res.end();

server.listen(4000);



