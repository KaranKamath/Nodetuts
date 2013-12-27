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

var maximumConcurrency = 5;

function worker(task, callback) {
    "use strict";
    request.post({uri: 'http://localhost:8080', body: JSON.stringify(task)},
        function (err, response, body) {
            callback(err, body && JSON.parse(body));
        });
}

var queue = async.queue(worker, maximumConcurrency);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (i) {
    "use strict";
    queue.push(i, function(err, result) {
        if (err) {
            throw err;
        }

        console.log(i + '^2 = %d', result);
    });
});