/*
 * Created by CoderBloc on 5/11/2016.
 */


// !!!!ANGULAR IS CLIENTSIDE AND CONSOLE LOGS TO THE CHROME CONSOLE BY DEFAULT!!!!
// var moment = require('moment');

var app = angular.module("CoderBloc", ["ngTable"]);

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
				   $scope.userLogInfo = "Thank you for registering, " + userData.userName + ". You may now Login";

				// alert("POST WORKING");
				// $window.location.assign("/index.html"); // redirect to index.html with user landing features

			   })
			   .error(function(data){
			   	  console.log("Error: "+ data);
			   });

		};

	}]); //end app controller


//controller for LOGIN:


	app.controller("loginCtrl", ["$rootScope","$scope","$http","$window","$timeout", function($rootScope, $scope, $http, $window, $timeout){
		//check this out in the modal! Captures the information
		$scope.loginData= {};

		// $scope.loginDataDismiss = "modal";

			$rootScope.open = function() {
				$scope.displayLoginModal = true
			};

		// $scope.displayLoginModal = false

		$scope.login = function(){ // declare an obj to hold the user data from the sign up form

			var logData = {// grab the data from the form and get it ready for DB insertion
				userName : $scope.loginData.userName,
				userPass : $scope.loginData.userPass
			};

			// console.log(logData); // works

			$http.get("/api/users/name/" + $scope.loginData.userName, {params:{userLoginPass: logData.userPass}}) // makes this data available in the http req including the password. how can i mask this?
				.then(function(data){ // after getting user credentials

					var loginName = $scope.loginData.userName;

					if(data.data.data.userName != loginName){

						$scope.loginStatusDiv = "Sorry, User Not Found";

						console.error(' incorrect username');

						//TODO: create a errormessage on the modal when incorrect name

					}

					else if (loginName === data.data.data.userName){ // IF user credentials are VALID

						console.log(data);
						// called with a 3 second timeout below. hides the modal and displays welcome messages.
						// can add other landing page features here in the future
						function successLogin() {
							angular.element('.modal').css('display', 'none');
							$rootScope.userLogInfo = "Welcome to CoderBloc, " + loginName + "!";
						}

						$scope.loginStatusDiv = "Successful Login!";
						$timeout(successLogin, 1500);
						console.log('yay logged in');

					}

				})
				.error(function(data){
					console.log("Error: "+ data);
					alert('oooo');
				});


	};//end login function

}]); //end app controller

app.controller("helpThreadCtrl", ["$scope","$http","$window","NgTableParams","$filter", function($scope, $http, $window, NgTableParams, $filter){

	$scope.catName = "Looking For Help";

	// $scope.threadCreate = function(){
	// 	var threadData = {
	// 		threadName: $scope.data.newThread
	// 	}
	// };

	// console.log(threadData);

	$http.get("/api/cat1/threads") // makes this data available in the http req including the password. how can i mask this?
		.then(function(data){ // after getting user credentials

			$scope.threads = data.data.data;

			// for (var i = 0; i < $scope.threads.length; i++) {
			// 	console.log($scope.threads[i]);
			// 	$scope.threadNames = $scope.threads[i].threadName
			// }

			// $scope.threadTable = new NgTableParams({
			// 	page: 1,
			// 	count: 0
			// }, {
			// 	total: $scope.threads.length,
			// 	getData: function ($defer, params) {
			// 		$scope.data = $scope.threads.slice((params.page() - 1) * params.count(), params.page() * params.count());
			// 		$defer.resolve($scope.data);
			// 	}
			// });



			console.log(data.data.data);

			$scope.threadName = data.data.data[0].threadName;


		//
		// 	if(data) {
		// 		console.log(data);
		// 		$scope.catName = data;
		// 	}
		// 	})
		// 	.error(function(data){
		// 		console.log("Error: "+ data);
			});

}]); //end app controller