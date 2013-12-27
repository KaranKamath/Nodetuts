var connect = require('connect');

var app = connect();

app.use(connect.logger(':method :req[content-type]'));

app.use(connect.bodyParser());

app.use(function (req, res) {
    res.end(JSON.stringify(req.body));
});

app.listen(8080);