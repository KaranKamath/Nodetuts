var server = require('net').createServer();

var port = 4000;

server.on('listening', function () {
	console.log('Server is now listening on port', port);
});

server.on('connection', function (socket) {
	console.log('New connection');
	socket.setEncoding('utf8');
	socket.write('Hello! You can start typing. Type \'quit\' to exit.\n');
	socket.on('data', function (data) {
		console.log('got data: ', data.toString());	
		if(data.trim().toLowerCase() === 'quit') {
			console.log('bye bye');
			return socket.end();
		}
		socket.write(data);
	});
	//socket.setKeepAlive(true, 5000);
	socket.on('end', function() {
		console.log('Client connection ended');
	});
});

server.on('close', function() {
	console.log('Server is now closed');
});

server.on('error', function (err) {
	console.log('Error occurred:', err.message);
});

server.listen(port);