var express = require("express");
var path = require("path");
var app = module.exports = express();
var friends = require("./../data/friends.js");

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
