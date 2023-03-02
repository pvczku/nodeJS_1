const http = require("http");
const PORT = 3000;
require("colors");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(`żądany przez przeglądarkę adres: ${request.url}`);

  if (request.url === '/strona4.html') {
    
  }
  else {
    fs.readFile(`static${request.url}`, (error, data) {
      if (error) {
        res.writeHead(404)
        res.end()
      }
      else {
let fileType = request.url.split(".")[1]
      switch (fileType) {
        case "js":
          res.writeHead(200, )
          break;
        
        case "js":
          
          break;
          case "js":
          
          break;
          case "js":
          
          break;
          case "js":
          
          break;
        default:
          break;
      } 
    }
      }
    })

  // if (request.url === "/strona3.html") {
  //   fs.readFile("static/third.html", function (error, data) {
  //     response.writeHead(200, { "Content-Type": "text/html" });
  //     response.write(data);
  //     response.end();
  //   });
  // } else if (request.url === "/style.css") {
  //   fs.readFile("static/style.css", function (error, data) {
  //     response.writeHead(200, { "Content-Type": "text/css" });
  //     response.write(data);
  //     response.end();
  //   });
  // } else if (request.url === "/script.js") {
  //   fs.readFile("static/script.js", function (error, data) {
  //     response.writeHead(200, { "Content-Type": "application/javascript" });
  //     response.write(data);
  //     response.end();
  //   });
  // }
});

server.listen(PORT, (req, res) => console.log("dziala " + PORT));
