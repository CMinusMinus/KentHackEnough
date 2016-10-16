module.exports = function(app, mongoose) {
    var Game = require('../models/gameschema.js');
    app.get("/", function(req,res){
        res.render('home');
    });

    app.get("/join", function(req,res){
        res.render('join', {notFound: false});//TODO notFound
    });

    app.get("/lobby/:accessCode",function(req,res){
        var accessCode = req.params.accessCode;
        Game.find({accessCode: accessCode}, function(err,results){
            console.log(results[0].players);
            if(results.length == 0){
                console.log("could not find game");
                res.redirect('/join');
            }
            else {
                res.render('lobby',{
                    accessCode: req.params.accessCode,
                    players: results[0].players
                });
            }
        });
    });

    app.get("/game/:accessCode", function(req,res){
        Game.find({accessCode: req.params.accessCode}, function(err,results){
            if(results.length == 0){
                console.log("could not find game");
                res.redirect('/');
            }
            else {
                res.render('game',{
                    accessCode: req.params.accessCode,
                    game: results[0]
                });
            }
        });
    });

    app.get("/new", function(req,res){
        res.render('newgame');
    });
}
