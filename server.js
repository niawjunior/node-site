//import the http module
var http = require('http');

//handle sending requests and returning responses
function handleRequests(req, res) {
  res.end('Hello world');
}

var server = http.createServer(handleRequests);

//start server and listen on port 3000
server.listen(3000, function() {
  console.log('Listening on port 3000');
})