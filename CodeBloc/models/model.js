/*
 * Created by CodeBloc on 5/11/2016.
 */

const db = require("db");

const User = db.define('user', {
	firstName: {
		type: db.STRING,
		field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
	},
	lastName: {
		type: db.STRING,
		field: 'last_name'
	}
}, {
	freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
	// Table created
	return User.create({
		firstName: 'test',
		lastName: 'noobertron5000'
	});
});

module.exports = User;