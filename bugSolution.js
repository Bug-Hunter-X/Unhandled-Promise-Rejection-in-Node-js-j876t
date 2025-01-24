const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', err => {
  console.error('Server failed to start:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Add custom error handling here, e.g., log to a file, send an alert, etc.
});