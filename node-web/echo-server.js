const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'POST' && req.url == '/echo') {
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      body = Buffer.concat(body).toString();
      arrDate = body.split('-');

      const birthday = new Date(arrDate[2], arrDate[1], arrDate[0]);

      console.log(birthday);
      res.end(birthday.toString());
    });

  } else {
    res.statusCode = 404;
    res.end();
  }


});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');
