
module.exports = function(app) {
    app.post("/posting", function(req, res){
        console.log(req);
        res.redirect("/game");
    });
};
