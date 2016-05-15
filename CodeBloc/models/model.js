// /*
//  * Created by CodeBloc on 5/11/2016.
//  */
//

const Sequelize = require("sequelize");
const db = require("../config/dbconnection.js");

// initiate the products table
var Products = db.define("products", {

	itemId: {
		type: Sequelize.INTEGER,
		field: "Item_ID",
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},

	productName: {
		type: Sequelize.STRING,
		field: "Product_Name",
		allowNull: false
	},

	deptName: {
		type: Sequelize.STRING,
		field: "Department_Name"
	},

	price: {
		type: Sequelize.FLOAT,
		field: "Price"
	},
	stockQuantity: {
		type: Sequelize.INTEGER,
		field: "Stocky_Quantity"
	}
}, {
	freezeTableName: true // model tableName will be the same as the model name
});

Products.sync({force:false}).then(function (err) {
	if(err){
		console.error("ERROR - " + err); // for some reason, an error is being thrown on table creation every time. still succeeds though.
	}

	else{
		console.log("Table Created Successfully");
	}
});

module.exports = Products;