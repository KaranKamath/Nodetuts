var spawn = require('child_process').spawn;

var child = spawn('node', ['plus_one.js']);

setInterval( function() {
	var number = Math.floor(Math.random()*10000);
	child.stdin.write(number + '\n');
	child.stdout.once('data', function(data) {
		console.log('child replied to ' + number + ' with: ' + data);
	});
}, 1000);

child.stderr.on('data' , function(data) {
	process.stdout.write(data);
});