var Player = require('mongoose').model('PlayerSchema');

exports.create = function(req, res, next) {
    var player = new Player(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(player);
        }
    });
};
