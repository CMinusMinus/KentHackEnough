var mongoose = require('mongoose');
var GameSchema = require('../models/gameschema');

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
