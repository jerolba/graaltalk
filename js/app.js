const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello Codemotion from Graal over node!");
}).listen(8000, function() { console.log("Graal node server running at http://127.0.0.1:8000/"); });