var tls = require('tls');
var fs = require('fs');
var port = 4000

var serverOptions = {
	key = fs.readFileSync('./my_key.pem');
	cert = fs.readFileSync('./my_certificate.pem');
};

var server = tls.createServer(serverOptions);

server.listen(port);

function secureConnectionListener(clientStream) {
	console.log('Received a new connection');

	clientStream.on('data', function(data) {
		console.log("Received data from client: ", data);
		if(data.toString().trim().toLowerCase() == 'quit') {
			clientStream.end("Bye bye");
		}
	});

	clientStream.write("Hey! Hello :)\n");
}

server.on('secureConnection', secureConnectionListener);
