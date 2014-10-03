// # server.js
//simplest possible web server

var http = require("http");

http.createServer(function(request, response) {
  console.log("URI: "+request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
console.log('listening on port 8888');