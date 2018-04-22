// //import the http module
// var http = require('http');

// //handle sending requests and returning responses
// function handleRequests(req, res) {
//   res.end('Hello world');
// }

// var server = http.createServer(handleRequests);

// //start server and listen on port 3000
// server.listen(3000, function() {
//   console.log('Listening on port 3000');
// })

////////////// EXPRESS ////////////////
var express = require('express');
var app = express();
var port = 3000;
var router = require('./app/routes');
app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('app listening')
})