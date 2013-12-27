/*jslint node: true */
var request = require('request');

function sum(a, b, callback) {
    "use strict";
    var options = {
        uri: 'http://localhost:8080/',
        qs: {
            a: a,
            b: b
        }
    };

    request(options, function (err, res, body) {
        var result;

        if (err) {
            return callback(err);
        }

        try {
            result = JSON.parse(body);
            console.log(res);
        } catch (parseErr) {
            return callback(parseErr);
        }

        return callback(null, result);
    });
}

module.exports = sum;