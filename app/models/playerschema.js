var mongoose = require('mongoose'),
    PlayerSchema = mongoose.Schema;

<<<<<<< HEAD
var PlayerSchema = mongoose.Schema({
    name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number 
});
=======
var PlayerSchema = new Schema({
    Name: String,
    canPlay: Boolean,
    isTurn: Boolean,
    gamesWon: Number
});

mongoose.model('User', UserSchema);
>>>>>>> Angular
