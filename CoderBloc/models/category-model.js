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
Categories.create({
	catId: 1,
	catName: "help",
	catDescription: "get help here"
});

module.exports = Categories;