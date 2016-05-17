/*
 * Created by CodeBloc on 5/11/2016.
 */

const express    = require("express"),
      router     = express.Router();

const Users      = require("../models/user-model.js"),
	  Categories = require("../models/category-model.js"),
	  Threads    = require("../models/thread-model.js"),
	  Posts      = require("../models/post-model.js");

// const userData   = require("../controllers/sign-up-ctrl.js");

// TODO Needs to be adjusted for sequelize kevh-5/11 @ 5:55 PM //

// The express router is used here to chain together different routes //
// API routes for the backend. errors are delivered in JSON and also thrown to the console //

// Sequelize errors are thrown when the routes have a problem reaching the DB

// GET user data

router.route("/api/users")
	.get(function(req, res) { // calling next(); passes control to the next matching route

		var response = {}; // declare empty obj to hold the data we'll receive

		Users.findAll({ // call the sequelize model and the method you would like to use on it

			raw: true // returns raw json without sequelize's added info

		}).then(function(data) { // what happens when we get that data back

			response = {"error" : false, "data" : data}; // place data in the response obj
			res.json(response); // display the response obj on the page
			console.log(response);

		}).catch(function (err) { // this will catch any errors that occur in our query chain

			response = {"error" : true, "data" : "ERROR " + err}; // puts any errors in the response obj
			res.json(response);
			console.error('SEQUELIZE ERROR: ', err);
			return done(err);

		});
	})
	.post(function(req,res, next) { // POST new user with a chained route

		// var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		// //randomize the ip to test your app
		// ip = Math.random();

		Users.create({
			userEmail: req.body.userEmail, // takes the values from the angular post requests
			userName : req.body.userName,
			userPass : req.body.userPass,
			userIp   : req.headers['x-forwarded-for'] || req.connection.remoteAddress // user IP address logged on sign up

		}).then(function() { // what happens after the info is posted
			console.log("POST WORKS IN API-ROUTES");
			res.redirect("/test.html");
		});
});

// GET user by data id
router.route("/api/users/:id")
	.get(function(req,res, next) {

		var response = {};

		Users.findById(req.params.id)
			.then(function(data) {
				response = {"error" : false, "data" : data}; // place data in the response obj
				res.json(response); // display the response obj on the page
				console.log(response);
			}).catch(function (err) { // this will catch any errors that occur in our query chain

			response = {"error" : true, "data" : "ERROR " + err}; // puts any errors in the response obj
			res.json(response);
			console.error('SEQUELIZE ERROR: ', err);
			return done(err);

		});

	}) // UPDATE user data with a chained route
	.put(function(req,res, next){



	}) // DELETE user data with a chained route
	.delete(function(req,res, next){



	});

module.exports = router;