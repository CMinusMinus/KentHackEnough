var mongoose = require('mongoose'),

    GameSchema = mongoose.Schema;

var GameSchema = mongoose.Schema({
    accessCode: Number,
    words: Array,
    players: Array,
    turnIndex: Number
});
