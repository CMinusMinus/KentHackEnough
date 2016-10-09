module.exports = function(app, mongoose) {
    var Game = mongoose.model('Game', require('../models/gameschema'));
    app.post('/game/create', function (req, res) {
      var players = [];
      var words = [];
      var turnIndex = 0;
      var accessCode = Math.floor(Math.random()*1000000);
      var newPlayer = {
        name: req.body.name,
        canPlay: true,
        isTurn: true,
        gamesWon: 0
      };
      players.push(newPlayer);

      var testGame = new Game({
          players: players,
          words: words,
          turnIndex: turnIndex,
          accessCode: accessCode
        });
        console.log(testGame);

        testGame.save(function(err) {
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
