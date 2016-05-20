/*
 * Created by CoderBloc on 5/11/2016.
 */

const express      = require("express"),
	  htmlRoutes   = require("./CoderBloc/routes/html-routes.js"), // html-routes for site navigation
	  userRoutes   = require("./CoderBloc/routes/user-routes.js"), // user-routes for backend CRUD
	  catRoutes    = require("./CoderBloc/routes/cat-routes.js"),
	  threadRoutes = require("./CoderBloc/routes/thread-routes.js"),
	  postRoutes   = require("./CoderBloc/routes/post-routes.js");

const mysql        = require("mysql"), // mySQL driver
	  path         = require("path"), // handles and transforms file paths
	  logger       = require("morgan"), // HTTP request logger middleware
	  bodyParser   = require("body-parser"), // body parsing middleware
	  cookieParser = require("cookie-parser"), // cookie parsing with signatures
	  http         = require("http"), // default http service
	  fs           = require("fs"), // default filesystem utility
	  debug        = require("debug")("coderbloc:server"), // debug utility
	  moment       = require("moment"), // date and time utility

	  now = moment().format(); // sets now to current time+date

// var favicon = require("serve-favicon");

var app = express(); // define express

var PORT = normalizePort(process.env.PORT || 5000); // set the port to listen on

app.set('port', PORT);

var server = http.createServer(app); // establish connection and attaches it to app

console.log("Hey, Listen!!"); // log connection result
console.log("Server Listening on " + PORT + " @ " + now);
server.listen(PORT);
server.on('error', onError);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev')); // define logging middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/node_modules', express.static(__dirname + '/node_modules')); // define static route for node modules
app.use('/CoderBloc/controllers', express.static(__dirname + '/CoderBloc/controllers')); // allows controllers to be used
app.use(express.static(__dirname + '/public')); // define static route for client side static files


//TODO find out how to condense routes with the router. doesn't seem to work with app.use for the general route path

// HTML ROUTES
app.use("/", htmlRoutes);

// API ROUTES - NOT USING A ROUTE-INDEX FILE FOR NOW
app.use("/", require("./CoderBloc/routes/user-routes.js"));
app.use("/", require("./CoderBloc/routes/cat-routes.js"));
app.use("/", require("./CoderBloc/routes/thread-routes.js"));
app.use("/", require("./CoderBloc/routes/post-routes.js"));

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

// middleware to catch 404s. can create or template custom 404 page
// this is different than the 404 handler below
app.use(function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/404.html"));
});

// catch 404 and throw to error handler with the requested URL
app.use(function(req, res, next) {
	var err = new Error('Not Found' + req.originalUrl); // also outputs the req route
	err.status = 404;
	next(err);
});

// END error handlers

module.exports = app;