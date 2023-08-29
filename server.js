const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/home')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/about')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/node')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to my node js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else
    {   
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to server</h1></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(4000);



