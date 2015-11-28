angular.module('app.controllers', ['ui.router', 'app.services'])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('listCtrl', function ($scope, Products) {

    Products.item_list.query(function(data){

        $scope.list = data;

        console.log($scope.list);
    });

})

.controller('searchCtrl', function ($scope, Products) {

     Products.item_detail.get({id: 7}, function(data){

        $scope.detail = data;

        console.log($scope.detail);
    });

});
 