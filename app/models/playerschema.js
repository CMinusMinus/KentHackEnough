var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
    name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number
});
