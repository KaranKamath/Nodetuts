var server = require('net').createServer();

var port = 4001;

var path = require('path');

var rs = require('fs').createReadStream('./socketdump.txt');

console.log(path.normalize(rs.path));

server.on('listening', function () {
	console.log('Server is now listening on port', port);
});

server.on('connection', function (socket) {
	rs.pipe(socket, {end : false});
	console.log('New connection');
	socket.setEncoding('utf8');
	socket.write('Hello! You can start typing. Type \'quit\' to exit.\n');
	var buffer;
	socket.on('data', function (data) {
		buffer += data.toString();
		if(data.toString().charCodeAt(0) === 13) {
			console.log('got data: ', buffer.toString());	
			if(buffer.trim().toLowerCase() === 'quit') {
				console.log('bye bye');
				return socket.end();
			}
			socket.write(buffer);
			buffer = "";
		}
	});
	//socket.setKeepAlive(true, 5000);
	socket.setTimeout(10000, function() {
		return socket.end('Timed out, Adios.');
	});
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