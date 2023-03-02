const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  //   console.log("nagłowki żądania:");
  //   console.log(JSON.stringify(req.rawHeaders, null, 5));
  //   console.log(JSON.stringify(req.headers, null, 5));
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  if (req.headers["user-agent"].includes("Edg")) {
    res.end("<h1>Jestes na Edge</h1>");
  } else if (req.headers["user-agent"].includes("Firefox")) {
    res.end("<h1>Jestes na Firefox</h1>");
  } else if (req.headers["user-agent"].includes("Chrome")) {
    res.end("<h1>Jestes na Chrome</h1>");
  } else {
    res.end("<h1>Jestes na innej przegladarce</h1>");
  }
  console.log(req.headers["user-agent"]);
});

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`);
});
