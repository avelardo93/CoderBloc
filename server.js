/*
 * Created by CodeBloc on 5/11/2016.
 */

const express = require("express"),
	  routes  = require("./codebloc/routes/html-routes.js"), // html-routes for site navigation
	  users   = require("./codebloc/routes/api-routes.js"); // api-routes for backend CRUD

const mysql = require("mysql"), // mySQL driver
	  Sequelize = require("sequelize"), // mySQL node.js ORM
	  path = require("path"), // handles and transforms file paths
	  logger = require("morgan"), // HTTP request logger middleware
	  bodyParser = require("body-parser"), // body parsing middleware
	  cookieParser = require("cookie-parser"), // cookie parsing with signatures
	  http = require("http"), // default http service
	  fs        = require("fs"), // default filesystem utility
	  debug = require("debug")("codebloc:server"), // debug utility
	  moment = require("moment"), // date and time utility


now = moment().format(); // sets now to current time+date

// var favicon = require("serve-favicon");

var app = express(); // define express

var PORT = normalizePort(process.env.PORT || 5000); // set the port to listen on
app.set('port', PORT);

var server = http.createServer(app); // establish connection and attaches it to app

console.log("Hey!"); // log connection result
console.log("Server Listening on " + PORT + " @ " + now);
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev')); // define logging middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/node_modules', express.static(__dirname + '/node_modules')); // define static route for node modules
app.use(express.static(__dirname + '/public')); // define static route for client side static files

// define routes. do it here then use the router? what's the best approach?
app.get("/", routes);
app.get("/survey", routes);
app.get("/profile", routes);
app.get("/api/users", users);
app.get("/api/users/:id", users);
app.post("/api/users", users);
app.put("/api/users", users);
app.put("/api/users/:id", users);
app.delete("/api/users/:id", users);

// BEGIN listeners/error handlers
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(PORT)) {
		// named pipe
		return val;
	}

	if (PORT >= 0) {
		// port number
		return PORT;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof PORT === 'string'
		? 'Pipe ' + PORT
		: 'Port ' + PORT;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found' + req.originalUrl); // also outputs the req route
	err.status = 404;
	next(err);
});

// END error handlers

module.exports = app;