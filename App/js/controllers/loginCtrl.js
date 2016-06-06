'use strict';
contactApp.controller('loginCtrl',function($scope,$location,$rootScope){
	$scope.login=function(){
		
		if($scope.user.username=='admin' && $scope.user.password=='admin'){	
		
			$location.path('/home');				
		}
		else{
			$scope.err="Invalid user or password"
			$location.path('/login');				
		}
	}	

});