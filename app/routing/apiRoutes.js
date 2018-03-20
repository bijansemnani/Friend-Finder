var express = require("express");
var path = require("path");
var app = module.exports = express();
var friends = require("./../data/friends.js");

app.get("/api/friends", function(req, res) {
  console.log(friends);
  //var chosen = req.params.characters;
  return res.json(friends);
});
