angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope,$location){
		$scope.url = '';

		$scope.CreateScene = function CreateScene(url){
			console.log('updating location to /#/scene/1234');
			$location.path('/scene/1234');
		}
	});

