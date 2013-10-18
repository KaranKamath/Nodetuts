var request = require('request');
var inspect = require('util').inspect;

body =  {
	entry_216956516: 'test-auto'
};

var options  = {
	url: 'https://docs.google.com/forms/d/1clIeMdBEIHqzZ6J-UVdTxZv228XHOL8qzDv55Hnm71E/viewform',
	method: 'POST',
	form: body
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
			//body: JSON.parse(body)
		}));
	}
);