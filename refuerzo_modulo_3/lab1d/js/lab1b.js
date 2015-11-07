angular.module('lab1b',  [])
.controller('lab1bController', function($scope){
	$scope.angular_filters = ['filter','currency','number','date','json','lowercase','uppercase','limitTo','orderBy'];
	$scope.angular_input = ['text','date','datetime-local','time','week','month','number','url','email','radio','checkbox'];
});