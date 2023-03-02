const http = require("http");
const PORT = 3000;
require("colors");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  if (req.url === "/A") {
    console.log("tekst na czerwono".red);
  } else if (req.url === "/B") {
    console.log("tekst na zielono".green);
  } else if (req.url === "/C") {
    console.log("tekst na teczowo".rainbow);
  } else {
  }
});

server.listen(PORT, (req, res) => console.log("dziala " + PORT));
