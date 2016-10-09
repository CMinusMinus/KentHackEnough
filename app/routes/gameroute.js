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

  /*app.get('/task/create', function (req, res) {
	res.redirect();
  });*/


	app.post('/game/join', function(req, res){
		var query = Game.where({accessCode: req.body.accessCode});
		query.findOne(function(err, game){
			if(err) {
				return next(err);
			}
			if (game){
				var newPlayer = {
					name: req.body.name,
					canPlay: true,
					isTurn: true,
					gamesWon: 0
				};
				game.players.push(newPlayer);
				game.save(function(err) {
					if (err) {
						console.log(err);
						return;
					}
					else{
						res.redirect("/lobby");
					}
				});
		};
	});

});
};
