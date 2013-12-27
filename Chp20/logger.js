var connect = require('connect');

var app = connect();

app.use(connect.logger('tiny'));

app.use(function (req, res) {
    res.end('Hello World');
});

app.listen(8080);