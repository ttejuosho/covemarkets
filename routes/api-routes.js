// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// GET route for getting all of the Mailing List
  app.get("/api/mlist/", function(req, res) {
    db.MailingList.findAll({})
    .then(function(dbMailingList) {
      res.json(dbMailingList);
    });
  });


// GET route for getting one contact in the mailing list
  app.get("/api/mlist/:id", function(req,res){
    db.MailingList.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMailingList){
      res.json(dbMailingList);
    });
  });


// POST route saving for new Contact
  app.post("/api/mlist", function(req,res){
    console.log(req.body);
    db.MailingList.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }).then(function(dbMailingList){
      res.json(dbMailingList);
    });
  });


  app.put('/api/mlist', function(req,res){
    db.MailingList.update(req.body, 
      {
    where: {
      id: req.body.id
    }
  }).then(function(dbMailingList){
    res.json(dbMailingList);
  });
  });

  app.delete('/api/mlist/:id', function(req, res){
    db.MailingList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMailingList){
      res.json(dbMailingList);
    });
  });
};