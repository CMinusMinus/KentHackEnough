var game = require('../controllers/gamecontroller');

module.exports = function(app) {
    app.route('/game').post(game.create);
};
