/*
 * Created by CoderBloc on 5/14/2016.
 */

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js"); // connection to the db

var Categories = db.define("categories", {

	catId: {
		type: Sequelize.INTEGER,
		field: "cat_id",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	catName: {
		type: Sequelize.STRING,
		field: "cat_name",
		unique: true
	},

	catDescription: {
		type: Sequelize.STRING,
		field: "cat_description"
	}

}, {
	freezeTableName: true
});

// category seed
Categories.create(
		{
			catId: 1,
			catName: "Looking For Help",
			catDescription: "Talk About Coding Problems STUFF HERE"
		})
	.then(Categories.create(
		{
			catId: 2,
			catName: "Peer Programmers",
			catDescription: "Read Lessons, Tutorials, Tips and Tricks Post By Your Fellow Students"
		})
	.then(Categories.create(
		{
			catId: 3,
			catName: "Project Room",
			catDescription: "Collaborate and Brainstorm - Threads Posted Here Also Display on the Project Board"
		})
	.then(Categories.create(
		{
			catId: 4,
			catName: "Coding Tools",
			catDescription: "IDEs, Books, Videos, Outside Tutorials and Much More"
		})
	.then(Categories.create(
		{
			catId: 5,
			catName: "General Discussion",
			catDescription: "All Things !Code"
		})
	.then(Categories.create(
		{
			catId: 6,
			catName: "Moderator Lounge",
			catDescription: "u no come in here!"
		})
)))));



module.exports = Categories;