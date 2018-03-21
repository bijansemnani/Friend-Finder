var express = require("express");
var path = require("path");
var friends = require("./../data/friends.js");
var app = module.exports = express();

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
