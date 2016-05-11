/*
 * Created by CodeBloc on 5/11/2016.
 */

const app = require("app"); // require initial server connection

var db = new Sequelize('mysql://user:pass@example.com:27015/dbname', { // initiate mySQL DB connection with sequelize
	define: {
		timestamps: true // true by default. these can be set on every sequelize .define
	}
});

module.exports = db; // make the DB connection available elsewhere