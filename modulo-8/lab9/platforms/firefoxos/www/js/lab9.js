angular.module('lab9', ['ngCordova'])

.controller('lab9Controller', function($scope, $cordovaDialogs, $cordovaVibration){

	$scope.active_alert =function(){
		$cordovaDialogs.alert('nCordova', 'Hola!', 'Aceptar')
	    .then(function() {
	      	$scope.lab="El usuario acepto";
	      	$cordovaVibration.vibrate(100);
	    });
	};

	$scope.active_confirm =function(){
		  $cordovaDialogs.confirm('Esta seguro?', 'confirmacion', ['Aceptar','Cancelar'])
    	 .then(function(buttonIndex) {
      	// no button = 0, 'OK' = 1, 'Cancel' = 2
      		if(buttonIndex === 1)
      		{
      			$scope.lab="El usuario acepto";
      		}
      		else if(buttonIndex === 2)
      		{
      			$scope.lab="El usuario no acepto";
      		}
      		else if(buttonIndex === 0)
      		{
      			$scope.lab="";
      		}
      		console.log(buttonIndex);
   		 });
	};

	$scope.active_prompt =function(){
		 $cordovaDialogs.prompt('Digite su login', 'login', ['Login','cancel'], 'user name')
    		.then(function(result) {
      		var input = result.input1;
      		// no button = 0, 'OK' = 1, 'Cancel' = 2
      		if(result.buttonIndex === 1)
      		{
      			$scope.lab=result.input1;
      		}
      		else if(result.buttonIndex === 2)
      		{
      			$scope.lab="El usuario cancelo";
      		}
      		else if(result.buttonIndex === 0)
      		{
      			$scope.lab="el usuario no selecciono nada";
      		}


      		console.log(' input= '+input);
    	});
	};


	$scope.active_beep =function(){
		 $cordovaDialogs.beep(3);
	};

});