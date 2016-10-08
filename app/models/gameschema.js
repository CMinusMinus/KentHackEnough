var mongoose = require('playerschema'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
    accessCode: Number,
    wordsPlayed: Array,
    players: Array,
    turnIndex: Number,
});

mongoose.model('Game', GameSchema);
