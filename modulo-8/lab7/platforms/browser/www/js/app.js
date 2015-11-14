angular.module('lab7', ['ngRoute', 'lab1', 'lab5', 'lab6'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/lab1', {
	    templateUrl : "views/lab1a.html",
	    controller: 'lab1Controller'
	})

	.when('/lab5', {
		templateUrl: "views/lab1b.html",
		controller: 'lab5Controller'
	})

	.when('/lab6', {
		templateUrl: "views/lab1c.html",
		controller: 'lab6Controller'
	});
 }]);