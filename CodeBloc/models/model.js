// /*
//  * Created by CodeBloc on 5/11/2016.
//  */
//
// const Sequelize = require("sequelize"); // mySQL node.js ORM
// const db = new Sequelize("mysql://username:pass@host:port/dbname");
//
//
// const User = db.define('user', { // create new table in the DB
// 	firstName: {
// 		type: db.STRING,
// 		field: 'first_name' // will result in an attribute that is firstName when user facing but first_name in the database
// 	},
// 	lastName: {
// 		type: db.STRING,
// 		field: 'last_name'
// 	}
// }, {
// 	freezeTableName: true // model tableName will be the same as the model name
// });
//
// User.sync({force: true}).then(function () {
// 	// table created
// 	return User.create({
// 		firstName: 'test',
// 		lastName: 'noobertron5000'
// 	});
// });
//
// module.exports = User;