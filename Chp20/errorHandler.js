var connect = require('connect');

var app = connect();

connect.errorHandler.title = 'My App';

app.use(function (req, res, next) {
    next(new Error('Hey!'));
});

app.use(function (req, res) {
    res.end('Hello World');
})

app.use(connect.errorHandler());

app.listen(8080);