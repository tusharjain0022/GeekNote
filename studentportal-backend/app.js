const { create } = require('domain');
const express = require('express');
const morgan = require('morgan');

const blogRouter = require('./routes/blogRoutes');
const branchRouter = require('./routes/branchesRoutes');

const app = express();

//Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/api/v1/blogs', blogRouter); //Mounting Routers
app.use('/api/v1/branches', branchRouter); //Mounting Routers

module.exports = app;
