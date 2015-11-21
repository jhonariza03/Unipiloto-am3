angular.module('lab11', ['ngCordova'])

.controller('lab11Controller', function($scope, $cordovaCamera){
  $scope.captureFileLocation =function(){
     var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
    
        $scope.image = imageURI;
      }, function(err) {
        // error
      });
  };


$scope.captureBase =function(){
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.image = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log('algo salio mal');
      });
    };
});