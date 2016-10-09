<<<<<<< HEAD
var players = require('../controllers/playercontroller');

module.exports = function(app, mongoose) {
    var Player = mongoose.model('Player', require('../models/playerschema'))
    app.post('/player/create', function (req, res) {
        var name1 = req.body.name;
        console.log(req.body);
        console.log(name1);

        var newPlayer = new Player();
        newPlayer.name = name1;
        newPlayer.canPlay=true;
        newPlayer.isTurn= false;
        newPlayer.gamesWon= 0;
        console.log(newPlayer);

        newPlayer.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        else

            res.redirect("/lobby");
        });
    });
=======
var users = require('../../app/controllers/playercontroller');

module.exports = function(app) {
    app.route('/users').post(user.create);
>>>>>>> Angular
};
