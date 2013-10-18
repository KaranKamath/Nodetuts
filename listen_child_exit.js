var spawn = require('child_process').spawn;

var child = spawn('ls', ['-la']);

child.stdout.on('data', function (data) {
	console.log('data from child: ' + data);
});

child.stderr.on('data', function (data){
	console.log('error : ' + err.message);
});

child.on('exit', function (code) {
	console.log('child terminated with code ' + code);
})