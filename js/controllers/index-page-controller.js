angular.module('SceneSkeleton')
	.controller('IndexPageController',function($location,$scope){
		$scope.showTitle = true;
		$scope.showPanel = false;
		$scope.showNavbar = false;

		$scope.openPanel = function(){
			$location.path('/scene/new');
			$scope.showTitle = false;
			$scope.showNavbar = true;
			$scope.showPanel = true;
		}
	});