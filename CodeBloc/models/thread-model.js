/*
 * Created by Kevo on 5/14/2016.
 */

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js"); // connection to the db

var Threads = db.define("threads", {

	threadId: {
		type: Sequelize.INTEGER,
		field: "thread_id",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	threadName: {
		type: Sequelize.STRING,
		field: "thread_name",
		unique: true
	},

	threadCat: {
		type: Sequelize.STRING,
		field: "thread_category"
	},

	threadAuthor: {
		type: Sequelize.STRING,
		field: "thread_author"
	},

	threadDate: {
		type: Sequelize.DATE,
		field: "thread_date"
	}

}, {
	freezeTableName: true
});

Threads.create({
	threadId: 1,
	threadName: "help me!",
	threadCat: "help",
	threadAuthor: "jimbojones",
});

module.exports = Threads;