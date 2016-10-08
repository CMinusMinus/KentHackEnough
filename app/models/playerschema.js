var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    Name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number
});

mongoose.model('User', UserSchema);
