var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

var PlayerSchema = mongoose.Schema({
    name: { type: String },
    canPlay: { type: Boolean },
    isTurn: { type: Boolean },
    gamesWon: { type:Number }
});
