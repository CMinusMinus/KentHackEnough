
module.exports = function(app, mongoose) {
    var Player = mongoose.model('Player', require('../models/playerschema.js'))
    app.post('/player/create', function (req, res) {
        var name = req.body.name;

        var newTask = new Player({
            name: name,
            canPlay: true,
            isTurn: false,
            gamesWon: 0
        });

        newTask.save(function(err) {
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
