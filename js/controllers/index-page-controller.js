angular.module('SceneSkeleton')
	.controller('IndexPageController',function($scope){
		$scope.showTitle = true;
		$scope.showPanel = false;
		$scope.showNavbar = false;

		$scope.openPanel = function(){
			$scope.showTitle = false;
			$scope.showNavbar = true;
			$scope.showPanel = true;
		}
	});