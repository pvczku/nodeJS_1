const http = require("http");
const PORT = 3000;
require("colors");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/index.html") {
    fs.readFile("static/index.html", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else if (request.url == "/second") {
    fs.readFile("static/second.html", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(data);
      response.end();
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<h1>404 - brak takiej strony</h1>");
    response.end();
  }
});

server.listen(PORT, (req, res) => console.log("dziala " + PORT));
