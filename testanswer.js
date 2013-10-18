var JSONStream = require('JSONStream');
var Stream = require('stream');

var s = new Stream();
s.pipe = function(dest) {
  dest.write(JSON.stringify({foo: 1}));
  //console.log(JSON.stringify('{foo: 1}'));
  return dest;
};

var parser = JSONStream.parse('foo.*');
s.pipe(parser);
parser.on('end', function (data) {
 	parser.pipe(process.stdout);
});

s.pipe(parser).pipe(process.stdout);