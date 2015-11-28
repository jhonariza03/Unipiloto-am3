angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('home', {
      url: '/page1',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('list', {
      url: '/page2',
      templateUrl: 'templates/list.html',
      controller: 'listCtrl'
    })


    .state('search', {
      url: '/page3',
      templateUrl: 'templates/search.html',
      controller: 'searchCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});