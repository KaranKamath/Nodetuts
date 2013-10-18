var spawn = require('child_process').spawn;

var child =  spawn('sleep', ['10']);

setTimeout(function () {
	child.kill();
}, 1000);

child.on('exit', function (code, signal) {
	if(code) {
		console.log('exited with code ' + code);
	} else if(signal) {
		console.log('terminated with signal ' + signal);
	}
});