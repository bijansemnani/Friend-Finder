//Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./../data/friends.js");

//Function for the api routes
// =============================================================
module.exports = function (app) {
  //Route to the raw json data
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  //Post route to push a new user into the "database"
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var bestFriend;
    var bestScore = Math.pow(10, 1000);
    //For each user compare the scores with the curr user to find opt match
    for (var i = 0; i < friends.length; i++) {
      var score = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
         if(newFriend.scores[j] === 'NaN'){
          newFriend.scores[j] = 0;
        }
        score += Math.abs(friends[i].scores[j]
          - parseInt(newFriend.scores[j]));
        if(score < bestScore){
          bestFriend = friends[i];
          bestScore = score;
        }
      }
    }
    //Add new user to database then respond to the ajax call in frontend
    friends.push(newFriend);
    res.json(bestFriend);
  });
}
