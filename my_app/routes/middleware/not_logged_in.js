/*jslint node:true */
function notLoggedIn(req, res, next) {
    "use strict";
    if (req.session.user) {
        res.send('Unauthorized', 401);
    } else {
        next();
    }
}

module.exports = notLoggedIn;