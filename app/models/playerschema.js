var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
    Name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number
});
