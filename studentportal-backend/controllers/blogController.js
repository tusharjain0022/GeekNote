/* eslint-disable node/no-unsupported-features/es-syntax */
const Blog = require('./../models/blogModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.aliasTopBlogs = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-upvote';
  next();
};

exports.getAllBlogs = async (req, res) => {
  try {
    //Execute Query
    const features = new APIFeatures(Blog.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid Data sent!',
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: {
        blog: 'null',
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getBlogStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
