/*
 * Created by CoderBloc on 5/18/2016.
 */

const express    = require("express"),
	  router     = express.Router();

const Categories = require("../models/category-model.js");

// GET ALL CATEGORIES
router.route("/api/cats")
	.get(function(req, res) { // calling next(); passes control to the next matching route

		var response = {}; // declare empty obj to hold the data we'll receive

		Categories.findAll({ // call the sequelize model and the method you would like to use on it

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
	.post(function(req,res, next) { // POST new CATEGORY with a chained route

		// var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		// //randomize the ip to test your app
		// ip = Math.random();

		Categories.create({

			// stuff here

		}).then(function() { // what happens after the info is posted

			console.log("POST WORKS IN API-ROUTES");
			res.redirect("/test.html");

		});
	});

// GET CATEGORY by id
router.route("/api/cats/:id")
	.get(function(req,res, next) {

		var response = {};

		Categories.findById(req.params.id)
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

	}) // UPDATE CATEGORY data with a chained route ~ admin only
	.put(function(req,res, next){



	}) // DELETE CATEGORY data with a chained route ~ admin only
	.delete(function(req,res, next){



	});

module.exports = router;