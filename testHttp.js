var server = require('http').createServer();
var util = require('util');
var fs = require('fs');

server.on('listening', function() {
	console.log('Server Listening');
});

server.on('request', function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'video/mp4'
	});
	var rs = fs.createReadStream('./test.mp4');
	//response.write(util.inspect(request.headers));
	rs.pipe(response, {end: false});
	response.on('data', function(data) {
		console.log('received');
	})
	rs.on('end', function() {
		response.end('Response over');
		console.log('ended response');
	});
});

server.on('close', function () {
	console.log('Server closed');
});

server.on('error', function (err){
	console.log('Error: ' , err.message);
});

server.listen(4000);