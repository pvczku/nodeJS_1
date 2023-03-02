const http = require("http");
const PORT = 3000;
require("colors");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  if (req.url === "/A" || req.url === "/a") {
    res.end("<span style='color: red;'>kolorowe</span>");
  } else if (req.url === "/B" || req.url === "/b") {
    res.end("<span style='color: green;'>kolorowe</span>");
  } else if (req.url === "/C" || req.url === "/c") {
    res.end("<span style='color: lightblue;'>kolorowe</span>");
  } else {
  }
});

const logger = require("tracer").colorConsole();

logger.log("hello");
logger.trace("hello");
logger.debug("hello");
logger.info("hello");
logger.warn("hello");
logger.error("hello");

server.listen(PORT, (req, res) => console.log("dziala " + PORT));
