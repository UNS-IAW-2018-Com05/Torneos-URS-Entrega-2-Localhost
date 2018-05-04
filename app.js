var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const fechasRouter = require('./app_server/routes/fixture');
const posicionesRouter = require('./app_server/routes/posiciones');
const clubesRouter = require('./app_server/routes/clubes');
const loginRouter = require('./app_server/routes/login');
const apiRouter = require('./app_server/routes/api');
const editorRouter = require('./app_server/routes/editor');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fixture',fechasRouter);
app.use('/posiciones', posicionesRouter);
app.use('/clubes', clubesRouter);
app.use('/login', loginRouter);
app.use('/api',apiRouter);
app.use('/editor',editorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
