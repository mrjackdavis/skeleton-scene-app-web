angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope,$location,$timeout){
		$scope.url = '';

		$scope.CreateScene = function CreateScene(url){
			$scope.loading = true;
			
			$timeout(function(){
				console.log('updating location to /#/scene/1234');
				$location.path('/scene/1234');
			},2000);
		}
	});

