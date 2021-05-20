const mongoose = require('mongoose');

const branchSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A branch must have name'],
  },
  intro: {
    type: String,
    required: [true, 'A branch must have an intro'],
  },
  link: {
    type: String,
    required: [true, 'A branch must have a link'],
  },
});

const Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;
