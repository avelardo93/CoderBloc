/*
 * Created by Kevo on 5/15/2016.
 */

const Sequelize = require("sequelize");
const db        = require("../config/dbconnection.js"); // db connection

const   Users      = require("./user-model.js"),
		Categories = require("./category-model.js"),
		Threads     = require("./thread-model.js"),
		Posts      = require("./post-model.js");

Users.sync({force:false})
	.then(function (err) { // sync the table with the db, IF it doesn't exist it will be created
		if (err) {
			console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
		}

		else {
			console.log("Table Created Successfully");
		}
	});

Categories.sync({force:false})
	.then(function (err) { // sync the table with the db, IF it doesn't exist it will be created
		if (err) {
			console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
		}

		else {
			console.log("Table Created Successfully");
		}
	});

Threads.sync({force:false})
	.then(function (err) { // sync the table with the db, IF it doesn't exist it will be created
		if (err) {
			console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
		}

		else {
			console.log("Table Created Successfully");
		}
	});

Posts.sync({force:false})
	.then(function (err) { // sync the table with the db, IF it doesn't exist it will be created
		if (err) {
			console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
		}

		else {
			console.log("Table Created Successfully");
		}
	});