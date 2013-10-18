require('http').createServer(function (request, response) {

	function printBack() {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end(JSON.stringify({
			url: request.url,
			method: request.method,
			headers: request.headers
		}));
	}

	switch(request.url) {
		case '/redirect': 
			response.writeHead(301, {
				'Location': '/'
			});
			response.end();
			break;

		case '/print/body':
			request.setEncoding('utf8');
			var body = "";
			
			request.on('data', function (data){
				body += data;
			});

			request.on('end', function (){
				response.end(JSON.stringify(body));
			});
			break;

		default: 
			printBack();
			break;
	}
}).listen(4001);