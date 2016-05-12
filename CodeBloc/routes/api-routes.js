/*
 * Created by CodeBloc on 5/11/2016.
 */

const express = require("express"),
      router  = express.Router(),
      User    = require("../models/model.js");

// TODO Needs to be adjusted for sequelize kevh-5/11 @ 5:55 PM //

// The express router is used here to chain together different routes
// API routes for the backend. errors are delivered in JSON and also thrown to the console

// GET user data
router.route("/api/users")
	.get (function(req, res) {

		var response = {};

		User.find({}, function (err, data) {

			if (err) {
				response = {"error": true, "message": "Error fetching data"};
				console.error(err);

			} else {
				response = {"error": false, "message": data};
			}
			res.json(response);
		});
	})
	.post(function(req,res) {
		var db = new User(req.body);

		db.save(function(err){
			if(err)
				res.send(err);
		});
		return res; // this prevented the data from posting to the DB twice
	});

// GET user by data id
router.route("/api/users/:id")
	.get(function(req,res) {
		var response = {};

		User.findById(req.params.id,function(err,data) {

			if(err) {
				response = {"error" : true,"message" : "Error fetching data"};
				console.error(err);

			} else {
				response = {"error" : false,"message" : data};
			}

			res.json(response);
		});
	}) // UPDATE user data
	.put(function(req,res){

		var response = {};

		User.findById(req.params.id,function(err,data) {

			if(err) {
				response = {"error" : true,"message" : "Error fetching data"};
				console.error(err);

			} else {
				data.save(function(err){
					if(err) {
						response = {"error" : true,"message" : "Error updating data"};
						console.error(err);
					} else {
						response = {"error" : false,"message" : "Data is updated for " + req.params.id};
					}
				});

				res.json(req.body);
			}
		});
	}) // DELETE user data
	.delete(function(req,res){
		var response = {};

		User.findById(req.params.id,function(err,data){

			if(err) {
				response = {"error" : true,"message" : "Error fetching data"};
				console.error(err);

			} else {
				User.remove({_id : req.params.id},function(err){
					if(err) {
						response = {"error" : true,"message" : "Error deleting data"};
						console.error(err);
					} else {
						response = {"error" : true,"message" : "Data associated with " + req.params.id + "is deleted"};
					}

					res.json(response);
				});
			}
		});
	});

module.exports = router;