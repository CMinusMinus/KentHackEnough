var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
morgan = require('morgan'),
serveStatic = require('serve-static');
path = require('path');


var db = require('./config/db');

mongoose.connect(db.url);

var port = 80;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("views",path.join("./app/views"));
app.set("view engine", "ejs");

require("./app/routes/navigation")(app,mongoose);
require("./app/routes/gameroute")(app, mongoose);
require("./app/routes/wordroute")(app, mongoose);


app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
