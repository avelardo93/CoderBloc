/*
 * Created by CodeBloc on 5/11/2016.
 */

var app = angular.module("Gameapp",[]);

app.controller("signUpCtrl", ["$scope", "$http", "$window", function($scope, $http, $window) {
    $scope.formData = {};

    $scope.createUser = function() {

        // take value of inputs and get ready for mongo insertion
        var userData = {
            realname: $scope.formData.realname,
            username: $scope.formData.username,
            age: $scope.formData.userAge,
            favGame: $scope.formData.userFavGame
        };

        // post info to mongo
        $http.post("/api/users", userData)
            .success(function (data) {

                // redirect to survey page after initial sign up
                $window.location.assign("/survey");
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    };
}]);

app.controller("surveyCtrl", ["$scope", "$http", "$window", function($scope, $http, $window) {
    // $scope.formData = {};

    $scope.createUser = function(req, res) {

        // take value of inputs and places them in userData object for insertion into the respective users answerKey array
        var userData = {
            answerKey: [
                $scope.formData.q1,
                $scope.formData.q2,
                $scope.formData.q3,
                $scope.formData.q4,
                $scope.formData.q5]
        };

        // PUT info to mongo
        $http.put("/api/users/57316651f6c2c0dc2fe7cf81", userData)
            .success(function (data) {

                // redirect to profile page after survey is taken
                $window.location.assign("/profile");
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    };
}]);

app.controller("matchCtrl", ["$scope", "$http", "$window", function($scope, $http, $window) {
    // $scope.formData = {};

    $scope.matchUser = function(req, res) {

        // logic that controls the match that is displayed

        var matchData = {
        };

        // angular is grabbing the correct userInfo from the specified userID
        $http.get("/api/users/57316651f6c2c0dc2fe7cf81", matchData)

            // on success, the retrieved user data fills in their respective fields
            .success(function (matchResult) {
                console.log(data);
                console.log("HEY");
                alert("WHAT!!!");
                $scope.matchName  = matchResult.message.username;
                $scope.matchImage = "http://i.imgur.com/7dsb3TM.png";
            })
            .error(function (data) {
                console.log("Error: " + data);
            });
    };
}]);