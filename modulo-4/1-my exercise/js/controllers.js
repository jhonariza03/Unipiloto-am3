angular.module('initial_spi.controllers', [])

.controller('productsController', function($scope,$http){
		var url = "data.json";
      	$http.get(url).success(function(response){ 
      		$scope.products = response;
      	});
})

.controller('contactController', function($scope){
	  $scope.submitContact = function(){
		   localStorage.setItem('contactName', $scope.contactName); 	
		   localStorage.setItem('contactEmail',$scope.contactEmail);
		   localStorage.setItem('contactDescription',$scope.contactDescription);	
		   return false;
	};
});