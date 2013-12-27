var server = require('net').createServer();

var port = 4001;

var path = require('path');

var sockets = [];

server.on('listening', function () {
	console.log('Server is now listening on port', port);
});

server.on('connection', function (socket) {
	console.log("new connection");

	sockets.push(socket);
	
	socket.write('Me :');

	var buffer = "";
	socket.on('data', function(data) {
		if(process.platform != "linux") {
			console.log(data.toString() + " " + data.toString().charCodeAt(0));
			if(data.toString().charCodeAt(0) == 13 || data.toString() == "\n" || data.toString() == "\n\r" || data.toString() == "\r"||data.toString() == "\r			\n") {
				console.log('got data: ', buffer);
				sockets.forEach(function(otherSocket) {
					if(otherSocket !== socket) {
						otherSocket.write('\n\rUser ' + sockets.indexOf(socket) + ': ' + buffer + '\n\r' + 'Me: ');
					}
				buffer = "";
			} else {
				buffer += data.toString();
			}
		} else {
			sockets.forEach(function(otherSocket) {
				if(otherSocket !== socket) {
					otherSocket.write('\n\rUser ' + sockets.indexOf(socket) + ': ' + data +'\n\r' + 'Me: '); 
				}
			}
		}
	});

	socket.on('close', function() {
		console.log('connection closed');
		indexOfSocket = sockets.indexOf(socket);
		sockets.splice(indexOfSocket, 1);
	});
});

server.on('close', function() {
	console.log('Server is now closed');
});

server.on('error', function (err) {
	console.log('Error occurred:', err.message);
});

server.listen(port);
