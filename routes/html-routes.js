// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads the landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // list route loads the mailing list page
  app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });

  // list route loads the privacy policy page
  app.get("/privacy-policy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/privacy-policy.html"));
  });

  // list route loads the unsubscribe page
  app.get("/unsubscribe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/unsubscribe.html"));
  });
  
};