/*jslint node: true */
var users = require('../../data/users');

function loadUser(req, res, next) {
    "use strict";
    var user = req.user = users[req.params.name];
    if (!user) {
        res.send('Not Found', 404);
    } else {
        next();
    }
}

module.exports = loadUser;