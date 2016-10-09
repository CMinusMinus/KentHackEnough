var User = require('mongoose').model('PlayerSchema');

exports.create = function(req, res, next) {
    var player = new User(req.body);
    user.save(function(err)) {
        if (err) {
            return next(err);
        }
        else {
            res.json(player);
        }
    });
};
