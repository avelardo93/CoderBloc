// /*
//  * Created by CodeBloc on 5/11/2016.
//  */
//

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js"); // connection to the db

const   Categories = require("./category-model.js"),
		Threads    = require("./thread-model.js"),
		Posts      = require("./post-model.js");

var Users = db.define("users", {

	userId: {
		type: Sequelize.INTEGER,
		field: "user_id",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	userName: {
		type: Sequelize.STRING,
		field: "user_name",
		unique: true
	},

	userPass: {
		type: Sequelize.STRING,
		field: "user_pass",
	},

	userEmail: {
		type: Sequelize.STRING,
		field: "user_email"
	},

	userLevel: {
		type: Sequelize.INTEGER,
		field: "user_level"
	},

	userRealName: {
		type: Sequelize.STRING,
		field: "user_real_name"
	},

	userPostCount: {
		type: Sequelize.INTEGER,
		field: "user_post_count"
	},

	userFavLang: {
		type: Sequelize.STRING,
		field: "user_favlang"
	},

	userAbout: {
		type: Sequelize.STRING,
		field: "user_about"
	},

	userIp: {
		type: Sequelize.STRING,
		field: "user_IP"
	}

}, {
	freezeTableName: true // model tableName will be the same as the model name
});

// promise chain of syncing tables. working for now but will put into model-index.js later
Users.sync({force:false})
	.then(Categories.sync({force:false}))
	.then(Threads.sync({force:false}))
	.then(Posts.sync({force:false}))
	.then(function (err) { // sync the table with the db, IF it doesn't exist it will be created
		if (err) {
			console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
		}

		else {
			console.log("Table Created Successfully");
		}
	});

// seed user. use bulkCreate() for more than one object
Users.create({
	userID: 1,
	userName: "test",
	userPass: "test",
	userEmail: "test@gmail.com",
	userLevel: 1,
	userRealName: "test",
	userPostCount: 1,
	userFavLang: "test",
	userAbout: "blahblah",
	userIp: 1
});

module.exports = Users;