angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/products', {
	    templateUrl : "views/products.html",
	    controller: 'productsController'
	})

	.when('/contact', {
		templateUrl: "views/contact.html",
		controller: 'contactController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);