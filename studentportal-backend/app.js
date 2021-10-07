const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const blogRouter = require('./routes/blogRoutes');
const branchRouter = require('./routes/branchesRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors());

//Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./../studentportal/build'));
  app.use((req, res, next) => {
    res.sendFile('./../studentportal/build/index.html');
  });
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
app.use(`/api/v1/blogs/`, blogRouter); //Mounting Routers
app.use(`/api/v1/branches/`, branchRouter); //Mounting Routers
app.use(`/api/v1/users/`, userRouter); //Mounting Routers

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
