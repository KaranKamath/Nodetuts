var connect = require('connect');

var app = connect();

app.use(connect.static(__dirname + '/public'));

app.use(function (req, res) {
    res.end('Hello World');
});

app.listen(8080);