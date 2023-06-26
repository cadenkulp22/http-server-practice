const http = require('node:http');
const server = http.createServer((request, response) => {
  let url = request.url.split('/');
  if (url[1] === '' && request.method === 'GET') {
    response.end("Hello Galvanize");
  }
  response.statusCode = 404;
  response.end();
});
server.listen(3000, "localhost", () => { console.log(`Server running at http://localhost:3000/`) });