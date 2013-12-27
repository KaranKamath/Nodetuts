var fs = require('fs');
var tls = require('tls');

var port = 4001;
var host = 'localhost';

var options = {
	key = fs.readFileSync('./my_key.pem');
	cert = fs.readFileSync('./my_cert.pem');
};

var client = tls.connect(port, host, options, function() {
	console.log("Connected\nauthorized: " + client.authorized);
	client.write('Hello');
});