angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('page', {
      url: '/page1',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('botones', {
      url: '/page2',
      templateUrl: 'templates/botones.html',
      controller: 'botonesCtrl'
    })
        
      
    
      
        
    .state('listas', {
      url: '/page3',
      templateUrl: 'templates/listas.html',
      controller: 'listasCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});