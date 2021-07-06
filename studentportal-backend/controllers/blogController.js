/* eslint-disable node/no-unsupported-features/es-syntax */
const AppError = require('../utils/appError');
const Blog = require('./../models/blogModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');

exports.aliasTopBlogs = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-upvote';
  next();
};

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  //Execute Query
  const features = new APIFeatures(Blog.find(), req.query)
    .filter()
    .sort()
    .limitFields();
  // .paginate();
  const blogs = await features.query;

  // Send Response
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: blogs.length,
    data: {
      blogs,
    },
  });
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      blog,
    },
  });
});

exports.createBlog = catchAsync(async (req, res, next) => {
  const newBlog = await Blog.create(req.body);
  newBlog.userId = req.params.id;

  res.status(201).json({
    status: 'success',
    data: {
      blog: newBlog,
    },
  });
});

exports.updateBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      blog,
    },
  });
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);

  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: {
      blog: 'null',
    },
  });
});

exports.getBlogStats = catchAsync(async (req, res, next) => {
  const stats = await Blog.aggregate([
    {
      $match: { upvote: { $gte: 5 } },
    },
    {
      $group: {
        _id: null,
        numBlogs: { $sum: 1 },
        avgUpvote: { $avg: '$upvote' },
        avgDownvote: { $avg: '$downvote' },
      },
    },
    {
      $sort: { avgUpvote: 1 },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});
