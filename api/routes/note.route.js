const express = require('express');
const app = express();
const noteRoutes = express.Router();

// Require Note model in our routes module
let Note = require('../models/Note');

// Defined store route
noteRoutes.route('/add').post(function (req, res) {
  let note = new Note(req.body);
  note.save()
    .then(note => {
      res.status(200).json({'note': 'note in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
noteRoutes.route('/').get(function (req, res) {
    Note.find(function (err, notes){
    if(err){
      console.log(err);
    }
    else {
      res.json(notes);
    }
  });
});

// Defined edit route
noteRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Note.findById(id, function (err, note){
      res.json(note);
  });
});

//  Defined update route
noteRoutes.route('/update/:id').post(function (req, res) {
    Note.findById(req.params.id, function(err, note) {
    if (!note)
      return next(new Error('Could not load Document'));
    else {
        note.title = req.body.title;
        note.description = req.body.description;
        note.save().then(note => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
noteRoutes.route('/delete/:id').get(function (req, res) {
    Note.findByIdAndRemove({_id: req.params.id}, function(err, note){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = noteRoutes;