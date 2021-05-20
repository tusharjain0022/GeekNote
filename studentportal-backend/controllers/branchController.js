const Branch = require('./../models/branchModel');

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: branches.length,
      data: {
        branches,
      },
    });
  } catch (err) {
    req.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createBranch = async (req, res) => {
  try {
    const newBranch = await Branch.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        branch: newBranch,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data format',
    });
  }
};

exports.getBranch = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        branch,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        branch,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteBranch = async (req, res) => {
  try {
    await Branch.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: {
        branch: 'null',
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
