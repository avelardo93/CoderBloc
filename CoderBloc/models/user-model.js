/*
 * Created by CoderBloc on 5/11/2016.
*/


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
		field: "user_pass"
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


// foreign keys are defined here. docs @ http://docs.sequelizejs.com/en/1.7.0/docs/associations/#foreign-keys

// links topics to the corresponding category. on delete, all topics will be deleted in that category. if the cat_id changes every topic is updated as well.
Categories.hasOne(Threads, {foreignKey: "thread_cat", onDelete: "CASCADE", onUpdate: "CASCADE"});

// links topics to the corresponding user. users cant be deleted if there are existing topics with the user_id. this is soif a user account is deleted, their post's won't be deleted as well
Users.hasOne(Threads, {foreignKey: "thread_author", onDelete: "RESTRICT", onUpdate: "CASCADE"});

// link posts to topics, same scenario as the first foreign key
Threads.hasOne(Posts, {foreignKey: "post_topic", onDelete: "CASCADE", onUpdate: "CASCADE"});

// link posts to topics, same scenario as the second foreign key
Users.hasOne(Posts, {foreignKey: "post_author", onDelete: "RESTRICT", onUpdate: "CASCADE"});


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
	userName: "Kev",
	userPass: "asd",
	userEmail: "kevo548@gmail.com",
	userLevel: 1,
	userRealName: "Kevin Haas",
	userPostCount: 1,
	userFavLang: "node.js",
	userAbout: "hai",
	userIp: 1337
})
	.then(Users.create( {
		userID: 2,
		userName: "Mariah",
		userPass: "asd",
		userEmail: "mariah@mariah.com",
		userLevel: 1,
		userRealName: "Mariah",
		userPostCount: 1,
		userFavLang: "node.js",
		userAbout: "puppyfarts",
		userIp: 1337
	}))
	.then(Users.create( {
		userID: 3,
		userName: "Anthony",
		userPass: "asd",
		userEmail: "test@gmail.com",
		userLevel: 1,
		userRealName: "Anthony",
		userPostCount: 1,
		userFavLang: "node.js",
		userAbout: "yoo",
		userIp: 1337
	}))	.then(Users.create( {
		userID: 4,
		userName: "Raghav",
		userPass: "asd",
		userEmail: "test@gmail.com",
		userLevel: 1,
		userRealName: "Raghav",
		userPostCount: 1,
		userFavLang: "node.js",
		userAbout: "supp",
		userIp: 1337
	}));


module.exports = Users;