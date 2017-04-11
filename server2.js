//Pull in the http package
var http = require("http");

//where we listen
var goodPort = 7000;
var badPort = 7500;

good = ("It works!!! You're a genius!");
bad = ("You're a failure");

//function to handle request amd responses

function handleGoodRequest(request, response) {
	// Return message to the user
	response.end(good);
}

function handleBadRequest(request, response) {
	response.end(bad);
}

var goodServer = http.createServer(handleGoodRequest);

var badServer = http.createServer(handleBadRequest);

goodServer.listen(goodPort, function() {
	console.log('goodServer is listening on port: ' + goodPort);
});

badServer.listen(badPort, function() {
	console.log('badServer is listening on port: ' + badPort);
});