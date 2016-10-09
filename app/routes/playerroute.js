var players = require('../app/controllers/playercontroller');

module.exports = function(app) {
    app.route('/players').post(player.create);
};
