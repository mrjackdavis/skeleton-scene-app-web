angular.module('SceneSkeleton')
	.controller('IndexPageController',function($location,$scope){

		$scope.$on('$locationChangeSuccess',function(state,url){
			var path = url.split('#')[1];
			$scope.showNavbar = path != '/';
		})

		$scope.enterApp = function(){
			$location.path('/scene/new');
		}
	});