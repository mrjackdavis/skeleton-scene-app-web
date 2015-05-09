angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope,$location,$timeout,Scene){
		$scope.url = '';

		$scope.CreateScene = function CreateScene(url){
			$scope.loading = true;

			Scene.save({
				resource:{
					type:"url",
					location:$scope.url
				}
			}).$promise.then(function(data){
				$location.path('/scene');
			});
			
			// $timeout(function(){
			// 	console.log('updating location to /#/scene/1234');
			// 	$location.path('/scene/1234');
			// },2000);
		}
	});

