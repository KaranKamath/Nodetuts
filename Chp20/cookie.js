var connect = require('connect');

var app = connect();

app.use(connect.cookieParser());

app.use(function (req, res) {
    res.end(JSON.stringify(req.cookies));
});

app.listen(8080);