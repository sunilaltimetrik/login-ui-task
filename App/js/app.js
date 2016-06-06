
var contactApp = angular.module('contactApp', ['ngRoute']);
	contactApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/home',{
		templateUrl:'partials/home.html'
		}).
	
	when('/login',{
		templateUrl:'partials/login.html',
		controller:'loginCtrl'
	}).
	when('/user',{
		templateUrl:'partials/user.html',
	
	}).
	
	otherwise({
		redirectTo:'/login'
		
		})
	
}]);

