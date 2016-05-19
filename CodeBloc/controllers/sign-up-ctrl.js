/*
 * Created by CodeBloc on 5/11/2016.
 */


// !!!!ANGULAR IS CLIENTSIDE AND CONSOLE LOGS TO THE CHROME CONSOLE BY DEFAULT!!!!
// var moment = require('moment');
var app = angular.module("CodeBloc", []);

	app.controller("signUpCtrl", ["$scope","$http","$window", function($scope, $http, $window){

		$scope.formData= {};

		$scope.createUser = function(){ // declare an obj to hold the user data from the sign up form


			var userData = { // grab the data from the form and get it ready for DB insertion
				userEmail: $scope.formData.userEmail,
				userName : $scope.formData.userName,
				userPass : $scope.formData.userPass
		};

			$http.post("/api/users", userData) // makes this data available in the http req
			   .then(function(data){ // after successful post of new user

				   //Mariah: adding usr info when they've successfully registered
				   $scope.userLogInfo = "Thank you for registering, " + userData.userName;

				// alert("POST WORKING");
				// $window.location.assign("/index.html"); // redirect to index.html with user landing features


			   })
			   .error(function(data){
			   	  console.log("Error: "+ data);
			   });

		};

	}]); //end app controller


//controller for LOGIN


app.controller("loginCtrl", ["$scope","$http","$window", function($scope, $http, $window){
	//check this out in the modal! Captures the information
	$scope.loginData= {};

	$scope.login = function(){ // declare an obj to hold the user data from the sign up form


		var logData = { // grab the data from the form and get it ready for DB insertion
			userName : $scope.loginData.userName,
			userPass : $scope.loginData.pass
		};

		console.log(logData); // works


		$http.get("/api/users", logData) // makes this data available in the http req
			.then(function(req, res){ // after successful post of new user

				console.log(logData.userName);
				// console.log(data);
				console.log(req);
				// alert("POST WORKING");
				// $window.location.assign("/index.html"); // redirect to index.html with user landing features

				// if($scope.logData.userName === req.params.userName){
				// 	alert('name found!');
				//
				// 	//Mariah: adding usr info when they've successfully registered
				// 	$scope.userLogInfo = "Welcome back, " + logData.userName;
				// }


			})
			.error(function(data){
				console.log("Error: "+ data);
				alert('oooo');
			});



	};

}]); //end app controller