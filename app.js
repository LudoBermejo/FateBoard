/******************************************
 *
 *  Modules & App
 *
 ******************************************/


var express = require('express');
var bodyParser = require('body-parser')
var mongodb = require('./conf/mongodb')

/******************************************
 *
 *  App
 *
 ******************************************/

var app = express();

/******************************************
 *
 *  Body parser
 *
 ******************************************/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))


/******************************************
 *
 *  Routes
 *
 ******************************************/

var users = require('./routes/users');
var install = require('./routes/install');
var cors = require('cors');

// use cors
app.use(cors())

//app.use(tokens.check());
app.use('/api/install', install);
app.use('/api/users', users);

/******************************************
 *
 *  404 errors
 *
 ******************************************/

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.send(404, "Unknown resource")
});


/******************************************
 *
 *  Environment VS production
 *
 ******************************************/

var port;
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    port = 8080;
}
// production error handler
// no stacktraces leaked to user
else
{
    port = 8080;
}

/******************************************
 *
 *  Initialize server
 *
 ******************************************/

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

