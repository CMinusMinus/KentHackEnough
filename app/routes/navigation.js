
module.exports = function(app, mongoose) {
    app.get("/", function(req,res){
        res.render("index");
    });
    app.get("/join", function(req,res){
        res.render('join');
    });

    app.get("/new", function(req,res){
        res.render('newgame');
    });

    app.get("/lobby", function(req,res){
        res.render('lobby');
    });

    app.get("/game", function(req,res){
        res.render('game');
    });
}
