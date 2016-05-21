/*
 * Created by CoderBloc on 5/11/2016.
 */

const express    = require("express"),
      router     = express.Router(),
	  bcrypt     = require("bcrypt-nodejs");

const Users      = require("../models/user-model.js"),
	  Categories = require("../models/category-model.js"),
	  Threads    = require("../models/thread-model.js"),
	  Posts      = require("../models/post-model.js");

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
	.post(function(req, res, next) { // POST new user with a chained route

		// set up bcrypt vars
		var salt, hash, password;

		// salt and hash the password
		preSaltPass = req.body.userPass;
		salt        = bcrypt.genSalt(10, function (err, salt) {
						this.salt = salt;
		});
		hash        = bcrypt.hashSync(preSaltPass, salt, function (err, hash) { // make the hashing async
						this.hash = hash;
		});

		Users.create({

			userEmail: req.body.userEmail, // takes the values from the angular post requests
			userName : req.body.userName,
			userPass : hash,
			userIp   : req.headers['x-forwarded-for'] || req.connection.remoteAddress // user IP address logged on sign up

		}).then(function() { // what happens after the info is posted

			console.log("POST WORKS IN API-ROUTES");
			res.redirect("/test.html");

		});
});

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
	.post(function(req, res, next) { // POST new user with a chained route

		// set up bcrypt vars
		var salt, hash, password;

		// salt and hash the password
		preSaltPass = req.body.userPass;
		salt        = bcrypt.genSalt(10);
		hash        = bcrypt.hash(preSaltPass, salt);

		Users.create({

			userEmail: req.body.userEmail, // takes the values from the angular post requests
			userName : req.body.userName,
			userPass : hash,
			userIp   : req.headers['x-forwarded-for'] || req.connection.remoteAddress // user IP address logged on sign up

		}).then(function() { // what happens after the info is posted

			console.log("POST WORKS IN API-ROUTES");
			res.redirect("/test.html");

		});
	});

// router.post("/login", function(req, res)) {
//
// }

// GET user by data id
router.route("/api/users/id/:id")
	.get(function(req, res, next) {

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
	.put(function(req, res, next){


	}) // DELETE user data with a chained route
	.delete(function(req, res, next){


	});

// GET user by data id
router.route("/api/users/id/:id")
	.get(function(req, res, next) {

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
	.put(function(req, res, next){


	}) // DELETE user data with a chained route
	.delete(function(req, res, next){


});



//Mariah noodlin space below:

// this is also doing... nothing. seems to only be able to find by ID and nothing else

router.route("/api/users/name/:userName")// UPDATE POST data with a chained route ~ user post editing
	.get(function(req, res, next) {

		console.log(req.params.userName);
		console.log(req.query.userLoginPass); // logs pass from login input, not sure how secure this is

		var attemptUserName = req.params.userName; // name the person inputs in the username box
		var attemptUserPass = req.query.userLoginPass;

		var response = {};

		Users.findAll({

			where: {userName: attemptUserName},
			plain: true

		}).then(function (data) {

			console.log(data.dataValues);

			// validate the hashed password in the db with what the user input
			bcrypt.compare(attemptUserPass, data.dataValues.userPass, function (err, res) {
				console.log(res);

				if (err) {
					console.error(err);
				}

				if(res == true) {

					console.log("auth matches!");
					response = {"error": false, "data": data.dataValues}; // place data in the response obj
					console.log(response);

				}

				else {
					console.log("no match!");
					response = {"error": false, "data": data}; // place data in the response obj
					console.log(response);
				}


			});

				// req.session.regenerate(function() {
				// 	req.session.user = attemptUserName;
				// 	return res.send(attemptUserName)
				// });

			response = {"error": false, "data": data}; // place data in the response obj
			res.json(response); // display the response obj on the page


		}).catch(function (err) { // this will catch any errors that occur in our query chain

			response = {"error": true, "data": "ERROR - INVALID CREDENTIALS" + err}; // puts any errors in the response obj
			res.json(response);
			console.error('SEQUELIZE ERROR: ', err);
			return done(err);

		})

	})
	.post(function(req, res, next) {



	})
	.put(function(req, res, next){



	}) // DELETE POST data with a chained route ~ admin only, users shouldn't have access
	.delete(function(req, res, next){


});



////tried alt approach, but stil nothing

// router.get('/api/users/:userName?', function(req, res){
//
// 	// If the user provides a specific character in the URL...
// 	if(req.params.userName){
//
// 		// Then display the JSON for ONLY that character.
// 		// (Note how we're using the ORM here to run our searches)
// 		Users.findAll({
// 			where: {
// 				userName: req.params.userName
// 			}
// 		}).then(function(result){
// 			res.json(result);
// 		})
// 	}
//
// 	// Otherwise...
// 	else{
// 		// Otherwise display the data for all of the characters.
// 		// (Note how we're using Sequelize here to run our searches)
// 		Users.findAll({})
// 			.then(function(result){
// 				res.json(result);
// 			})
// 	};
//
// });

module.exports = router;