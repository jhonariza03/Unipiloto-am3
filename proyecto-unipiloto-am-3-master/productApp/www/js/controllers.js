angular.module('app.controllers', ['ui.router', 'app.services'])
     
.controller('homeCtrl', function($scope, Products) {
	 Products.item_list.query(function(data){

        $scope.list = data;

        console.log($scope.list);
    });
})
   
.controller('optionsCtrl', function($scope) {

})
   
.controller('signInCtrl', function($scope, Users, $state, $window) {
	$scope.signin = function(){
		
    	 Users.item_signin.save({id: 1},{'email': $scope.email,'firstname':$scope.firstname,'surname':$scope.surname,'mobile':$scope.mobile,'password':$scope.password },function(data){
	          	$scope.data =data;
	          	$window.sessionStorage.token = data.token;
		        $state.go('menu.home');//#/product-detail
		        console.log($scope.detail);
		});
    };
	
})
   
.controller('signUpCtrl', function($scope, Users,$ionicPopup,$state) {
		$scope.createUsers = function(){
		 var confirmPopup = $ionicPopup.confirm({
	      title: 'Creacion de usuario',
	      template: '¡Confirma y bienvenido!'
	    });
    	confirmPopup.then(function(res){
	      if (res) 
	      {
	          Users.item_create.save({id: 1},{'email': $scope.email,'firstname':$scope.firstname,'surname':$scope.surname,'mobile':$scope.mobile,'password':$scope.password },function(data){
	          	$scope.data =data;
		        $state.go('menu.home');//#/product-detail
		        console.log($scope.detail);
			  });
	      } 
	      else 
	      {
	        console.log('no esta de acuerdo');
	      }
    });
	};
})
   
.controller('productDetailCtrl', function($scope,Products, $stateParams,$ionicPopup,$state) {
	 Products.item_detail.get({id: $stateParams.id}, function(data){
        $scope.detail = data;
        console.log($scope.detail);
    });
    $scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Eliminar producto',
      template: 'Esta seguro de eliminar el producto?'+ $scope.detail.name
    });
    confirmPopup.then(function(res){
      if (res) 
      {
          Products.item_delete.delete({id: $stateParams.id}, function(data){
	        $scope.detail = data;
	        $state.go('menu.home');
	        console.log($scope.detail);
		  });
      } 
      else 
      {
        console.log('no esta de acuerdo');
      }
    });
  };

})
   
.controller('productEditCtrl', function($scope,Products, $stateParams,$ionicPopup,$state) {
	 Products.item_detail.get({id: $stateParams.id}, function(data){
        $scope.detail = data;
        console.log($scope.detail);
    });
    $scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Eliminar producto',
      template: 'Confirma eliminar el producto? '+ $scope.detail.name
    });
    confirmPopup.then(function(res){
      if (res) 
      {
          Products.item_delete.delete({id: $stateParams.id}, function(data){
	        $scope.detail = data;
	        $state.go('menu.home');
	        console.log($scope.detail);
		  });
      } 
      else 
      {
        console.log('no esta de acuerdo');
      }
    });
  };

	$scope.updateProduct = function(){
		 var confirmPopup = $ionicPopup.confirm({
	      title: 'Actualizar producto',
	      template: 'Confirma el cambio del producto? '+ $scope.detail.name
	    });
    	confirmPopup.then(function(res){
	      if (res) 
	      {
	          Products.item_update.update({id: $stateParams.id}, {'name': $scope.detail.name,'type':$scope.detail.type,'quantity':$scope.detail.quantity,'price':$scope.detail.price }, function(data){
		        $state.go('productDetail', {id: data.id});//#/product-detail
		        console.log($scope.detail);
			  });
	      } 
	      else 
	      {
	        console.log('no esta de acuerdo');
	      }
    });
	};

})
   
.controller('productCreateCtrl', function($scope,Products, $stateParams,$ionicPopup,$state) {
		$scope.createProduct = function(){
		 var confirmPopup = $ionicPopup.confirm({
	      title: 'Creando producto',
	      template: 'Confirma creacion del producto? '+ $scope.name
	    });
    	confirmPopup.then(function(res){
	      if (res) 
	      {
	          Products.item_create.save(function(data){
	          	$scope.data =data;
		        $state.go('menu.home');//#/product-detail
		        console.log($scope.detail);
			  });
	      } 
	      else 
	      {
	        console.log('no esta de acuerdo');
	      }
    });
	};
})
   
.controller('profileCtrl', function($scope,Users,$ionicPopup,$state) {
	 Users.item_profile.get({id: 1},function(data){
        $scope.list = data;
        console.log($scope.list);
    });

	$scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Eliminar Cuenta',
      template: 'Esta seguro de eliminar cuenta?'
    });
    confirmPopup.then(function(res){
      if (res) 
      {
          Users.item_delete.delete({id: 1}, function(data){
	        $scope.detail = data;
	        $state.go('menu.options');
	        console.log($scope.detail);
		  });
      } 
      else 
      {
        console.log('no esta de acuerdo');
      }
    });
  };


})
   
.controller('profileEditCtrl', function($scope, Users, $ionicPopup) {
	 Users.item_profile.get({id: 1},function(data){
        $scope.list = data;
        console.log($scope.list);
    });

	$scope.profileupdate = function(){
		 var confirmPopup = $ionicPopup.confirm({
	      title: 'Cambio de Informacion',
	      template: 'Confirma el cambio Informacion'
	    });
    	confirmPopup.then(function(res){
	      if (res) 
	      {
	          Users.item_update.update({id: 1}, {'email':$scope.list.email,'Firstname':$scope.list.firstname,'Lastname':$scope.list.lastname,'Mobile':$scope.list.phone}, function(data){
		        $state.go('menu.home');
		        console.log($scope.detail);
			  });
	      } 
	      else 
	      {
	        console.log('no esta de acuerdo');
	      }
    });
	};
})
   
.controller('forgotPasswordCtrl', function($scope, Users, $ionicPopup, $state) {
	$scope.forgotPassword = function(){
		 var confirmPopup = $ionicPopup.confirm({
	      title: 'Contrasena',
	      template: 'Confirmar cambio de contrasena '
	    });
    	confirmPopup.then(function(res){
	      if (res) 
	      {
	          Users.item_forgot.update({id: 1}, {'password':$scope.newpassword}, function(data){
		        $state.go('menu.home');

		        console.log($scope.detail);
			  });
	      } 
	      else 
	      {
	        console.log('no esta de acuerdo');
	      }
    });
	};
})
   
.controller('signOutCtrl', function($scope, $ionicPopup, $state, $window) {
	$scope.singout = function(){
		var confirmPopup = $ionicPopup.confirm({
	      title: 'Cerrar Sesion',
	      template: 'Confirmar Cerrar la Sesion'
	    });
		confirmPopup.then(function(res){
	    if (res) 
    	{
			$window.sessionStorage.token = ''
			$state.go('menu.options');
		}
 		else 
       {
       	console.log('Cancel');
       }

    });
	};



})
 