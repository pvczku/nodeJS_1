const http = require("http");
const PORT = 3000;
require("colors");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("static/index.html", function (error, data) {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>blad 404 - nie ma pliku!<h1>");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, (req, res) => console.log("dziala " + PORT));
