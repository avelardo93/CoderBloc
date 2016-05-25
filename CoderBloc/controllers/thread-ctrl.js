/*
 * Created by Kevo on 5/20/2016.
 */

var app = angular.module("threadCtrl", []);

user.controller("helpThreadCtrl", ["$scope","$http","$window", function($scope, $http, $window){

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

			for (var i = 0; i < $scope.threads.length; i++) {
				console.log($scope.threads[i]);
				$scope.threadNames = $scope.threads[i].threadName
			}

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