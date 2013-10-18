var http = require('http');

var fs = require('fs');

var options  = {
	host: "www.google.com",
	port: 80,
	method: "GET"
};

var file = fs.createWriteStream("./tmp/responsetest.txt");

http.request(options, function (response) {
	response.pipe(file);
	response.on('data', function (data) {
		console.log(data.toString());
	});
}).end();
