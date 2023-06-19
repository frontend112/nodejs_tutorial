const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.end('welcome on home page')
  }

  if (req.url === '/about') {
    res.end('welcome on the about page')
  }
  res.end(`
    <p>
      <h1>incorrect address<h1>
      <a href="/">home page</a>
    </p>
  `)
})

server.listen(port);
