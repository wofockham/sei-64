// A simple HTTP web server using just the standard Node library

const http = require('http'); // From the standard Node library

http.createServer((req, res) => {
    console.log(`Serving request: ${ req.method } ${ req.url }`); // Budget logging
    if (req.url === '/hello') {
        res.end('Hello cruel world');
    } else if (req.url === '/goodbye') {
        res.end('Goodbye cruel world');
    } else if (req.url === '/groucho') {
        res.end('This is the Groucho page');
    } else {
        res.end('You have reached a random page');
    }
}).listen(3000);

console.log('Server started on http://localhost:3000');
