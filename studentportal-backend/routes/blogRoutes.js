const express = require('express');
const blogController = require('./../controllers/blogController');

const router = express.Router();

router
  .route('/top-5-upvoted')
  .get(blogController.aliasTopBlogs, blogController.getAllBlogs);

router.route('/blog-stats').get(blogController.getBlogStats);

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
