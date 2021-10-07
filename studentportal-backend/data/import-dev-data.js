const fs = require('fs');
const Blog = require('./../models/blogModel');
const Branch = require('./../models/branchModel');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { pathToFileURL } = require('url');
dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

//Read JSON file

const blogs = JSON.parse(
  fs.readFileSync(`${__dirname}/blog_data.json`, 'utf-8')
);
const branches = JSON.parse(
  fs.readFileSync(`${__dirname}/branches.json`, 'utf-8')
);
//import data to DB

const importBlogData = async () => {
  try {
    await Blog.create(blogs);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importBranchData = async () => {
  try {
    await Branch.create(branches);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//delete all data from DB
const deleteBlogData = async () => {
  try {
    await Blog.deleteMany();
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteBranchData = async () => {
  try {
    await Branch.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--deleteBlog') deleteBlogData();
if (process.argv[2] === '--importBlog') importBlogData();

if (process.argv[2] === '--deleteBranch') deleteBranchData();
if (process.argv[2] === '--importBranch') importBranchData();

console.log(process.argv);
