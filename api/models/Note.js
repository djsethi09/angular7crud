const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Note
let Note = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  is_fav: {
    type: Number
  }
},{
    collection: 'notes'
});

module.exports = mongoose.model('Note', Note);