var server = require('http').createServer();

server.on('request', function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	var left =10;
	var interval = setInterval(function () {
		for(var i = 0; i < 100; i++) {
			response.write(Date.now() + " ");
		}
		if(-- left === 0) {
			response.end();
		}
	},1000);
});

server.on('error', function (err) {
	console.log('error: ', err.message);
});

server.listen(4000);