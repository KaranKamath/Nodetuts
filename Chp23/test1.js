var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

client.query('USE node');

query = client.query('SELECT * FROM test');

query.on('result', function (row) {
    console.log(row);
});

client.end();