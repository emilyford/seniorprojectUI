var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cp = require('child_process');
var router = express.Router();
var io = require('socket.io');

var routes = require('./routes/index');
var users = require('./routes/users');
var intruders = require('./routes/intruders');
var setup = require('./routes/setup');
var jsonparsing = require('./routes/jsonparsing');
var intruderjsonparsing = require('./routes/intruderjsonparsing');
var json = require('./routes/json');
var usersetup = require('./routes/usersetup');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/public', express.static(__dirname + "/public"));

app.use('/', routes);
app.use('/users', users);
app.use('/intruders', intruders);
app.use('/setup', setup);
app.use('/jsonparsing', jsonparsing);
app.use('/intruderjsonparsing', intruderjsonparsing);
app.use('/json', json);
app.use('/usersetup', usersetup);

//var wss = new WebSocketServer({
//  server: server
//});
//console.log('websocket server created!');

//wss.on('connection', function(ws){
//  console.log('websocket connection open');
//  ws.on('message', function(message){
//   console.log(message);
//  });
//  ws.on('close', function(){
//    console.log('websocket connection closed.');
//  }
//});

//router.get('/test/:nameinput', function(req,res,next){
//  res.render('test', {output: req.params.nameinput});
//});

//router.post('/test/submit', function(req,res,next){
//  console.log("Hiiiiiiiiiiiiiiiiiiiii");
  //var id = req.body.nameinput;
  //console.log(id);
  //res.redirect('/test/...');
//});

//module.exports = router;

console.log('Hello!!');
setInterval(function runScheduledAction() {
  console.log('Inside set interval!');
  //cp.fork(__dirname + '/json.js');
  cp.fork(__dirname + '/jsonintruders.js');
  //runScript('./json.js', function(err){
  //  if(err) throw err;
  //  console.log('finished running data.js');
  //});
}, 30 * 1000);

//5*60*1000
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
