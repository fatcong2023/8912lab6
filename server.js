const http = require('http');

const port = process.env.PORT; // Use the port Azure provides

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/hello') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('hello world');
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
