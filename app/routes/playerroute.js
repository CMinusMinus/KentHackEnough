
module.exports = function(app) {
    app.post('/player/create', function (req, res) {
        var name = req.body.name;

        var newTask = new Task({
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
