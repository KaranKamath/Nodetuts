/*jslint node: true */
var async = require('async'),
    request = require('request');

function done(err, response, body) {
    "use strict";
    if (err) {
        throw err;
    }

    console.log('3^4: %d', body);
}

async.waterfall([

    function (next) {
        "use strict";
        request.post({ uri: 'http://localhost:8080', body: '3'}, next);
    },

    function (res, body, next) {
        "use strict";
        request.post({uri: 'http://localhost:8080', body: body}, next);
    }
], done);