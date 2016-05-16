/*
 * Created by Kevo on 5/15/2016.
 */

const Sequelize = require("sequelize");
const db        = require("../config/dbconnection.js"); // db connection

const   Users      = require("./user-model.js"),
		Categories = require("./category-model.js"),
		Threads    = require("./thread-model.js"),
		Posts      = require("./post-model.js");

// var Users = db.define("users", {
//
// 	userId: {
// 		type: Sequelize.INTEGER,
// 		field: "user_id",
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
//
// 	userName: {
// 		type: Sequelize.STRING,
// 		field: "user_name",
// 		allowNull: false,
// 		unique: true
// 	},
//
// 	userPass: {
// 		type: Sequelize.STRING,
// 		field: "user_pass",
// 		allowNull: false
// 	},
//
// 	userEmail: {
// 		type: Sequelize.STRING,
// 		field: "user_email"
// 	},
//
// 	userLevel: {
// 		type: Sequelize.INTEGER,
// 		field: "user_level"
// 	},
//
// 	userRealName: {
// 		type: Sequelize.STRING,
// 		field: "user_real_name"
// 	},
//
// 	userPostCount: {
// 		type: Sequelize.INTEGER,
// 		field: "user_post_count"
// 	},
//
// 	userFavLang: {
// 		type: Sequelize.STRING,
// 		field: "user_favlang"
// 	},
//
// 	userAbout: {
// 		type: Sequelize.STRING,
// 		field: "user_about"
// 	}
//
// }, {
// 	freezeTableName: true // model tableName will be the same as the model name
// });
//
// module.exports = Users;
//
// var Categories = db.define("categories", {
//
// 	catId: {
// 		type: Sequelize.INTEGER,
// 		field: "category_id",
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
//
// 	catName: {
// 		type: Sequelize.STRING,
// 		field: "category_name",
// 		allowNull: false,
// 		unique: true
// 	},
//
// 	catDescription: {
// 		type: Sequelize.STRING,
// 		field: "category_description"
// 	}
//
// }, {
// 	freezeTableName: true
// });
//
// // module.exports = Categories;
//
// var Posts = db.define("posts", {
//
// 	postId: {
// 		type: Sequelize.INTEGER,
// 		field: "post_id",
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
//
// 	postBody: {
// 		type: Sequelize.TEXT,
// 		field: "post_body",
// 		allowNull: false
// 	},
//
// 	postAuthor: {
// 		type: Sequelize.STRING,
// 		field: "post_author",
// 		allowNull: false
// 	},
//
// 	postTopic: {
// 		type: Sequelize.STRING,
// 		field: "post_topic"
// 	},
//
// 	postDate: {
// 		type: Sequelize.DATE,
// 		field: "post_date"
// 	}
//
// }, {
// 	freezeTableName: true
// });
//
// // module.exports = Posts;
//
// var Threads = db.define("threads", {
//
// 	threadId: {
// 		type: Sequelize.INTEGER,
// 		field: "thread_id",
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
//
// 	threadName: {
// 		type: Sequelize.STRING,
// 		field: "thread_name",
// 		allowNull: false,
// 		unique: true
// 	},
//
// 	threadCat: {
// 		type: Sequelize.STRING,
// 		field: "thread_category"
// 	},
//
// 	threadAuthor: {
// 		type: Sequelize.STRING,
// 		field: "thread_author"
// 	},
//
// 	threadDate: {
// 		type: Sequelize.DATE,
// 		field: "thread_date"
// 	}
//
// }, {
// 	freezeTableName: true
// });
//
// // module.exports = Threads;

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

Users.create({
	
});