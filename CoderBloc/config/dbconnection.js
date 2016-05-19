/*
 * Created by CoderBloc on 5/11/2016.
 */

var Sequelize = require("sequelize");

var   db = new Sequelize("coderbloc", "KevoDB", "SoLdIeRdB123", {
	host: "kevdbs.c8whnuhdyymu.us-west-2.rds.amazonaws.com",
	port: 3306,
	dialect: "mysql",
	define: {
		timestamps: true // true by default. these can be set on every sequelize .define
	}
});

db.authenticate().then(function (err) {
	if (err) {
		console.error("ERROR, Please check your connection");
	} else {
		console.log("Connection Successful!");
	}
});

module.exports = db;