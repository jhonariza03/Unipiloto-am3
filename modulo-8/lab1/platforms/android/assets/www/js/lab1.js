angular.module('lab1', ['ngCordova'])

.controller('lab1Controller', function($scope, $cordovaDeviceMotion){
    var options = { frequency: 2000 };
    document.addEventListener("deviceready", function () {


        $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
            $scope.x = result.x;
            $scope.y = result.y;
            $scope.z = result.z;
            $scope.time_stamp = result.timestamp;
        }, function(err) {
            // An error occurred. Show a message to the user
            console.log(err);
        });



    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
         $scope.x = result.x;
            $scope.y = result.y;
            $scope.z = result.z;
            $scope.time_stamp = result.timestamp;
    });

    }, false);

    $scope.runDeviceMotion = function()
    {
         $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
            $scope.x = result.x;
            $scope.y = result.y;
            $scope.z = result.z;
            $scope.time_stamp = result.timestamp;
        }, function(err) {
            // An error occurred. Show a message to the user
            console.log(err);
        });
    }
});