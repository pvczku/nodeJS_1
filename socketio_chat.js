const http = require('http')
const PORT = 3000
const server = http.createServer((req,res) => {

})

server.listen(PORT, () => console.log("server works on port: " + PORT))