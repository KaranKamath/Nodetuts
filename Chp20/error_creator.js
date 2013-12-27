function errorCreator () {
    return function (req, res, next) {
        next(new Error('This is an errror'));
    };
}

module.exports = errorCreator;