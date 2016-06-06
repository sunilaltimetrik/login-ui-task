
'use strict';
contactApp.controller('homeCtrl',function($scope){
 $scope.custom = true;
        $scope.toggleImg = function() {
			
            $scope.custom = $scope.custom === false ? true: false;
        };
$scope.custom1 = true;
		 $scope.toggleForm = function() {
			
            $scope.custom1 = $scope.custom1 === false ? true: false;
        };

});
