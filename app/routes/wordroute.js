var Game = require('../models/Game')

module.exports = function(app) {
  // Need word checker route that checks the word given then routes to either
  // good or bad route.

  // Good route -> add word -> next player -> submit

  // bad route -> remove player (check # players) -> next player if one avavilable
  // -> submit

  // add word
  // throwing shit at the wall here
  app.post('loc',$word);

}
