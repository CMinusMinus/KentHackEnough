var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

var PlayerSchema = new Schema({
    Name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number
});

mongoose.model('Player', Schema);
