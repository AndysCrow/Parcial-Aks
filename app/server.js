
const http = require("http");
http.createServer((req, res) => {
  res.end("myapp up");
}).listen(3000);
