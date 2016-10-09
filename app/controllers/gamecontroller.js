var mongoose = require("mongoose");
var Game = mongoose.model('Game', GameSchema);

exports.create = function(req, res, next) {
    var game = new Game(req.body);
    game.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(game);
        }
    });
};
