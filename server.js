const http = require('http');

const server = http.createServer((req,res) => {
    res.write('Shashikanth');
    res.end()

});

server.listen(4000);



