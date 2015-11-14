angular.module('lab6', ['ngCordova'])

.controller('lab6Controller', function($scope, $rootScope, $cordovaNetwork){

    document.addEventListener("deviceready", function () {

    $scope.type = $cordovaNetwork.getNetwork()

    $scope.isOnline = $cordovaNetwork.isOnline()

    $scope.isOffline = $cordovaNetwork.isOffline()

   
    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
    })

  }, false);
});