/*jslint node: true */
var sum = require('../client/sum_client');
var test = require('tap').test;

test('sums 1 and 2', function (t) {
    "use strict";
    sum(1, 2, function (error, result) {
        t.notOk(error, 'no error');
        t.equal(result, 3, '1 + 2 should equal 3');
        t.end();
    });
});

test('sums 5 and 0', function (t) {
    "use strict";
    sum(5, 0, function (error, result) {
        t.notOk(error, 'no error');
        t.equal(result, 5, '5 + 0 should equal 5');
        t.end();
    });
});

test('sums 5 and -2', function (t) {
    "use strict";
    sum(5, -2, function (error, result) {
        t.notOk(error, 'no error');
        t.equal(result, 3, '5 + -2 should equal 3');
        t.end();
    });
});