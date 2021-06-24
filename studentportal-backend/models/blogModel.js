const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: String,
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
    maxLength: [100, 'Blog title too big'],
    minLength: [5, 'Blog title too small'],
  },
  author: {
    type: String,
    required: [true, 'A blog must have author'],
  },
  userId: {
    type: String,
    required: [true, 'Please sign in to write a blog'],
  },
  posting_date: {
    type: String,
    required: [true, 'A blog must have posting date'],
  },
  secretBlog: {
    type: Boolean,
    default: false,
  },
  brief_info: {
    type: String,
    required: [true, 'A blog must have breif info'],
  },
});

//DOCUMENT MIDDLEWARE: runs before .save() and .create()
blogSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// blogSchema.pre('save', function (next) {
//   console.log('Will save Document...');
//   next();
// });

// blogSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE

blogSchema.pre(/^find/, function (next) {
  this.find({ secretBlog: { $ne: true } });
  next();
});

blogSchema.post(/^find/, function (docs, next) {
  // console.log(docs);
  next();
});

//Aggregation Middleware

blogSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretBlog: { $ne: true } } });
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
