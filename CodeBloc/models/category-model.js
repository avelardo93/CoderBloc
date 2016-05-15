/*
 * Created by Kevo on 5/14/2016.
 */

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js"); // connection to the db

var Categories = db.define("categories", {

	catId: {
		type: Sequelize.INTEGER,
		field: "category_id",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	catName: {
		type: Sequelize.STRING,
		field: "category_name",
		allowNull: false,
		unique: true
	},
	
	catDescription: {
		type: Sequelize.STRING,
		field: "category_description"
	}

}, {
	freezeTableName: true
});

module.exports = Categories;