var dgram =  require('dgram');

var server = dgram.createSocket('udp4');

var port = 4000;

server.on('listening', function () {
	var address = server.address();
	console.log('server listening on ' + address.address + ':' + address.port);
});

server.on('message', function (message) {
	console.log('server got message: ' + message);
});

server.bind(port);