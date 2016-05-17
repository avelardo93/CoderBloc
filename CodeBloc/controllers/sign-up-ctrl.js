/*
 * Created by CodeBloc on 5/11/2016.
 */

// !!!!ANGULAR IS CLIENTSIDE AND CONSOLE LOGS TO THE CHROME CONSOLE BY DEFAULT!!!!

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

				alert("POST WORKING");
				$window.location.assign("/test.html"); // redirect to index.html with user landing features

			   })
			   .error(function(data){
			   	  console.log("Error: "+ data);
			   });

		};

	}]); //end app controller