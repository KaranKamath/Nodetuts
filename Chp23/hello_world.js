/*jslint node: true */
var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

client.query(
    'SELECT "Hello, world!"',
    function (err, results, fields) {
        "use strict";
        if (err) {
            throw err;
        }
        console.log(results);
        console.log(fields);
        client.end();
    }
);