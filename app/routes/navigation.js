module.exports = function(app, mongoose) {
    var Game = require('../models/gameschema.js');
    app.get("/", function(req,res){
        res.render('home');
    });

    app.get("/join", function(req,res){
        res.render('join', {notFound: false});
    });

    app.get("/lobby/:accessCode",function(req,res){
        var accessCode = req.params.accessCode;
        Game.find({accessCode: accessCode}, function(err,results){
            console.log(results);
            if(results.length == 0){
                console.log("could not find game");
                res.redirect('/join');
            }
            else {
                res.render('lobby',{accessCode: req.params.accessCode});
            }
        });


    })

    app.get("/game", function(req,res){
        res.render('game');
    });

    app.get("/new", function(req,res){
        res.render('newgame');
    });
}
