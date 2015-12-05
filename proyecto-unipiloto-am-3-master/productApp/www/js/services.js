angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function(){

}])


.service('Users', function($resource){
	this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-up');

	this.item_signin = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-in/:id',{id:'@id'});
	
	this.item_forgot = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/forgot-password/:id',{id:'@id'},{
		update:{
			method:'PUT'
		}
	});

	this.item_profile = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/profile/:id');

	this.item_update = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/update/:id',{id:'@id'},{
		update:{
			method:'PUT'
		}
	});

	this.item_delete = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/delete/:id', {id: '@id'}, {
		delete: {
			method: 'DELETE'
		}
	});

})



.service('Products', function($resource){

	this.item_detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id');

	this.item_delete = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/delete/:id', {id: '@id'}, {
		delete: {
			method: 'DELETE'
		}
	});

	this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create');

	this.item_update = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/update/:id',{id:'@id'},{
		update:{
			method:'PUT'
		}
	});

	this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
});

