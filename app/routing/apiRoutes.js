var express = require("express");
var path = require("path");
var friends = require("./../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var bestFriend;
    var bestScore = Math.pow(10, 1000);

    for (var i = 0; i < friends.length; i++) {
      var score = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
         if(newFriend.scores[j] === 'NaN'){
          newFriend.scores[j] = 0;
        }
        score += Math.abs(friends[i].scores[j] - parseInt(newFriend.scores[j]));
        if(score < bestScore){
          bestFriend = friends[i];
          bestScore = score;
        }
      }
    }
    friends.push(newFriend);
    res.json(bestFriend);
  });
}
