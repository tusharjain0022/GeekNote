const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  by_student: {
    type: Boolean,
    default: false,
  },
  by_admin: {
    type: Boolean,
    default: false,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  downvote: {
    type: Number,
    default: 0,
  },
  tags: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    required: [true, 'A blog must have title'],
  },
  intro_para: {
    type: String,
    required: [true, 'A blog must have introduction paragraph'],
  },
  author: {
    type: String,
    required: [true, 'A blog must have author'],
  },
  posting_date: {
    type: String,
    required: [true, 'A blog must have posting date'],
  },
  brief_info: {
    type: String,
    required: [true, 'A blog must have posting date'],
  },
});

//DOCUMENT MIDDLEWARE: runs before .save)_ and .create()
blogSchema.pre('save', function () {
  console.log(this);
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
