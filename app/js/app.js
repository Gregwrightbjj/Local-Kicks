'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers',
  'firebase'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/landing_page.html',
		controller: 'LandingPageController'
	});
	$routeProvider.when('/search', {
		templateUrl: 'partials/search.html',
		controller: 'searchController'
	});
	$routeProvider.when('/add', {
		templateUrl: 'partials/add.html',
		controller: 'addController'
	});
	$routeProvider.when('/specific', {
		templateUrl: 'partials/specific.html',
		controller: 'specificController'
	});
	$routeProvider.when('/tables', {
		templateUrl: 'partials/table.html',
		controller: 'AuthController'
	});
	
    $routeProvider.otherwise({redirectTo: '/'});
}]);
