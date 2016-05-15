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
		allowNull: false
	},

	postAuthor: {
		type: Sequelize.STRING,
		field: "post_author",
		allowNull: false
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

module.exports = Posts;