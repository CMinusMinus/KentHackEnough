var mongoose = require('Player'),
    GameSchema = mongoose.Schema;

var GameSchema = new Schema({
    accessCode: Number,
    wordsPlayed: Array,
    players: Array,
    turnIndex: Number,
});

mongoose.model('Game', GameSchema);
