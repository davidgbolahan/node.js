const http = require('http'); // import http module

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(4000);

console.log('server running on port 8081');