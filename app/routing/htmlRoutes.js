//Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./../data/friends.js");

//Function for the html routes
// =============================================================
module.exports = function (app) {
  //Route to the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //Route to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}
