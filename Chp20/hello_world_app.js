var connect = require('connect');

var errorCreator = require('./error_creator');
var saveRequest = require('./save_request');
var writeHeader = require('./write_header');
var replyText = require('./reply_text');
var errorHandler = require('./error_handler');

var app = connect.createServer(
    errorCreator(),
    saveRequest(__dirname + '/requests'),
    writeHeader('X-Powered-By', 'Node'),
    replyText("Hello again!"),
    errorHandler()
    );

app.listen(8080);