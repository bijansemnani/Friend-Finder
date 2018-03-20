// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var route = require('./app/routing/htmlRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(route);

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
