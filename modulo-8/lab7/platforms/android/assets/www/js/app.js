angular.module('lab7', ['ngRoute', 'lab1', 'lab5', 'lab6'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/lab1', {
	    templateUrl : "views/lab1.html",
	    controller: 'lab1Controller'
	})

	.when('/lab5', {
		templateUrl: "views/lab5.html",
		controller: 'lab5Controller'
	})

	.when('/lab6', {
		templateUrl: "views/lab6.html",
		controller: 'lab6Controller'
	});
 }]);