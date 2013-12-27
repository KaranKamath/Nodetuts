/*jslint node: true */
var port =  (process.argv[2] && parseInt(process.argv[2], 10)) || 8080;

require('http').createServer(function (req, res) {
    "use strict";
    var body = '';

    req.setEncoding('utf-8');

    req.on('data', function (data) {
        body += data;
    });

    req.once('end', function () {
        var number, squared;
        number = JSON.parse(body);
        squared = Math.pow(number, 2);
        res.end(JSON.stringify(squared));
    });
}).listen(port, function () {
    "use strict";
    console.log('Squaring server listening on port %d', port);
});