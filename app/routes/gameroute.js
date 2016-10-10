module.exports = function(app, mongoose) {
    //var Game = mongoose.model('Game', require('../models/gameschema'));
    var Game = require('../models/gameschema.js');
    app.post('/game/create', function (req, res) {
        console.log(req.body);
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

        var newGame = new Game({
            players: players,
            words: words,
            turnIndex: turnIndex,
            accessCode: accessCode
        });
        console.log(newGame);

        newGame.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        else
            res.redirect("/lobby");
        });
    });

    /*app.param("accessCode", function(req,res,next,accessCode){
        Game.find({'accessCode': accessCode}, function(err,game){
            if(err)
                return next(err);
            if(!game)
                return;
            req.game = game;
            next();
        });
    });*/

    app.post('/game/join',function(req,res){
        var newPlayer = {
          name: req.body.name,
          canPlay: true,
          isTurn: true,
          gamesWon: 0
        };
        console.log(req.body.accessCode);
            var query = Game.update({accessCode: req.body.accessCode},{$push:{'players':newPlayer}},function(err){
                if(err)
                    console.log(err);
        });
        res.redirect("/lobby");
  });
};
