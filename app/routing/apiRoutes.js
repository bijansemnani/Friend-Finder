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
  var bestFriend;
  console.log(friends[0].score.length);
  console.log(newFriend.scores);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  var bestScore = Math.pow(10, 1000);
  for (var i = 0; i < friends.length; i++) {
    var score = 0
    for (var j = 0; j < newFriend.scores.length; j++) {
       console.log(newFriend.scores[j]);
       score += Math.abs(friends[i].score[j] - parseInt(newFriend.scores[j]));
      if(score < bestScore){
        console.log(score);
        bestFriend = friends[i];
        bestScore = score;
      }
    }
  }
  console.log(newFriend);

  friends.push(newFriend);

  res.json(bestFriend);
});
