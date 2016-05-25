/*
 * Created by CoderBloc on 5/14/2016.
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

	threadDate: {
		type: Sequelize.DATE,
		field: "thread_date"
	}

}, {
	freezeTableName: true
});

Threads.create({
	threadId: 1,
	threadName: "help me!"
})
	.then(Threads.create( {
		threadId: 2,
		threadName: "how do i javaskirp?"
	}))
	.then(Threads.create( {
		threadId: 3,
		threadName: "JSON boyyy"
	}))
	.then(Threads.create( {
		threadId: 4,
		threadName: "what language should i learn?"
	}))
	.then(Threads.create( {
		threadId: 5,
		threadName: "PANCAKE stack tutorial"
	}))
	.then(Threads.create( {
		threadId: 6,
		threadName: "WebStorm Pwnsz0rz!!1"
	}))
	.then(Threads.create( {
		threadId: 7,
		threadName: "what do you guys eat while you code?"
	}));

module.exports = Threads;