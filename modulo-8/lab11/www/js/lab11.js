angular.module('lab11', ['ngCordova'])

.controller('lab11Controller', function($scope, $cordovaCamera, $cordovaDialogs){
  $scope.captureFileLocation =function(){
     var options = {
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: true
                };
                $cordovaCamera.getPicture(options).then(function(imageURI) {
                      $cordovaDialogs.confirm('Esta seguro de mostrar la foto guardada en la ruta '+imageURI+'?', 'confirmacion', ['Aceptar','Cancelar'])
                         .then(function(buttonIndex) {
                            if(buttonIndex === 1)
                            {
                                 $scope.image = imageURI;
                            }
                      });
                }, 
                function(err) {
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
           $cordovaDialogs.confirm('Esta seguro de mostrar la foto guardada en la ruta '+imageData+'?', 'confirmacion', ['Aceptar','Cancelar'])
                         .then(function(buttonIndex) {
                            if(buttonIndex === 1)
                            {
                                  $scope.image = "data:image/jpeg;base64," + imageData;
                            }
                      }); 
      }, function(err) {
        console.log('algo salio mal');
      });
    };
});