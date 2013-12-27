/*jslint node: true */
var async = require('async'),
    request = require('request');

function done(err, results) {
    "use strict";
    if (err) {
        throw err;
    }

    console.log('results: %j', results);
}

async.parallel([

    function (next) {
        "use strict";
        request.post({ uri: 'http://localhost:8080', body: '4'},
            function (err, response, body) {
                next(err, body && JSON.parse(body));
            });
    },

    function (next) {
        "use strict";
        request.post({uri: 'http://localhost:8080', body: '5'},
            function (err, response, body) {
                next(err, body && JSON.parse(body));
            });
    }
], done);