var https = require('https');
var fs = require('fs');

var options = {
	host: "google.com",
	path: "/",
	method: "GET"
}

var request = https.request(options, function (response) {
	console.log("authorized: ", response.socket.authorized);
	console.log("Cert: ");
	console.log(response.socket.getPeerCertificate());
}).end();

