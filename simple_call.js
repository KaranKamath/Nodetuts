var request = require('request');
var inspect = require('util').inspect;

body =  {
	a: 1,
	b: 2
};

var options  = {
	url: 'http://localhost:4001/print/body',
	method: 'GET',
	headers: {
		'X-My-Header': 'value'
	},
	json: body
};
request(
	options,
	function (error, response, body) {
		if(error) {
			throw error;
		}
		console.log(inspect({
			err: error,
			res: {
				statusCode: response.statusCode,
				headers: response.headers
			},
			body: JSON.parse(body)
		}));
	}
);