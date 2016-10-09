
module.exports = function(app, mongoose) {
    var Player = mongoose.model('Player', require('../models/playerschema.js'))
    app.post('/player/create', function (req, res) {
        var name = req.body.name;

        var newPlayer = new Player({
            name: name,
            canPlay: true,
            isTurn: false,
            gamesWon: 0
        });

        newPlayer.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        else

            res.redirect("/lobby");
        });
    });

  /*app.get('/task/create', function (req, res) {
    res.redirect();
  });*/
};
