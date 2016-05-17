/*
 * Created by CodeBloc on 5/11/2016.
 */

var app = angular.module("CodeBloc", []);

	app.controller("signUpCtrl", ["$scope","$http","$window", function($scope, $http, $window){

		$scope.formData= {};

		$scope.createUser = function(){

			// declare an obj to hold the user data from the sign up form

			var userData = {
				userEmail: $scope.formData.userEmail,
				userName: $scope.formData.userName,
				userPass: $scope.formData.userPass
				// userIp: req.headers['x-forwarded-for'] || req.connection.remoteAddress
		};

			$http.post("/api/users", userData)
			   .success(function(data){

					console.log("POST WORKING");
			   		$window.location.assign("/index.html");
			   })
			   .error(function(data){
			   	  console.log("Error: "+ data);
			   });

		};

	}]); //end app controller

// module.exports = userData;