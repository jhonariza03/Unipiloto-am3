angular.module('lab7.services', ['ngResource']) // sirve para consumir api s REST
.factory('data', function($resource){

    'use strict';

    return $resource('http://127.0.0.1:3636/data');
});