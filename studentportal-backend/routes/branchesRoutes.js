const express = require('express');
const branchController = require('./../controllers/branchController');

const router = express.Router();

router
  .route('/')
  .get(branchController.getAllBranches)
  .post(branchController.createBranch);

router
  .route('/:id')
  .get(branchController.getBranch)
  .patch(branchController.updateBranch)
  .delete(branchController.deleteBranch);

module.exports = router;
