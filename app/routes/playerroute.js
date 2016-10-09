var player = require('../controllers/playercontroller');

module.exports = function(app) {
    app.route('/players').post(player.create);
};
