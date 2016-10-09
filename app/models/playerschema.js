var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

var PlayerSchema = mongoose.Schema({
    name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number 
});
