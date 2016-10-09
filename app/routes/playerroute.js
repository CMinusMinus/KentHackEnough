var players = require('../controllers/playercontroller');

module.exports = function(app, mongoose) {
    var Player = mongoose.model('Player', require('../models/playerschema'))
    app.post('/player/create', function (req, res) {
        var name1 = req.body.name;
        console.log(req.body);
        console.log(name1);

        var newPlayer = new Player({
            name: name1,
            canPlay: true,
            isTurn: false,
            gamesWon: 0
        });
        console.log(newPlayer.name);

        newPlayer.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        else
            res.redirect("/lobby");
        });
    });
};
