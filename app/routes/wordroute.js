var Game = require('../models/gameschema.js');
var GameRoute = require('./gameroute');


module.exports = function(app,mongoose) {
  // Need word checker route that checks the word given then routes to either
  // good or bad route.

  // Good route -> add word -> next player -> submit

  // bad route -> remove player (check # players) -> next player if one avavilable
  // -> submit


  // add word
  // throwing shit at the wall here
  app.post('/game/words',function(req,res){
    var query = Game.update({accessCode: req.body.accessCode},{$push:{'words':req.body.word}},function(err){
        if(err)
            console.log(err);
    });
    /*quer.findOne(function(err,Game) {
        if(err)
            return next(err);
        if(Game) {
          Game.words.push(req.body.word);
      }
  });*/
  res.redirect("/")
  });


}
