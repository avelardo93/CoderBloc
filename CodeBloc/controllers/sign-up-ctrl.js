/*
 * Created by CodeBloc on 5/11/2016.
 */

var app = angular.module("CodeBloc", []);

	app.controller("signUpCtrl", ["$scope","$http","$window", function($scope, $http, $window){

		$scope.formData= {};

		$scope.createUser = function(){

			$http.post("/api/users", userData)
			   .success(function(data){


			   		$window.location.assign("/index.html");
			   })
			   .error(function(data){
			   	  console.log("Error: "+ data);
			   });

		};


	}]); //end app controller