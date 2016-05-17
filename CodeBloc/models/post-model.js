/*
 * Created by Kevo on 5/14/2016.
 */

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js");

var Posts = db.define("posts", {

	postId: {
		type: Sequelize.INTEGER,
		field: "post_id",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	postBody: {
		type: Sequelize.TEXT,
		field: "post_body",
	},

	postAuthor: {
		type: Sequelize.STRING,
		field: "post_author",
	},

	postTopic: {
		type: Sequelize.STRING,
		field: "post_topic"
	},

	postDate: {
		type: Sequelize.DATE,
		field: "post_date"
	}

}, {
	freezeTableName: true
});

Posts.create({
	postId: 1,
	postBody: "omgz0rz i need help with javiskirpz!",
	postAuthor: "jimbojones",
	postTopic: "help me!",
});

module.exports = Posts;