var express = require("express");
var path = require("path");
var app = module.exports = express();
var friends = require("./../data/friends.js");

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
