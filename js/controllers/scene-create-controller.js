angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope,$location,$timeout,SceneRequests,Generators){
		$scope.url = '';
		$scope.Generators = Generators.query();

		$scope.CreateScene = function CreateScene(url){
			$scope.loading = true;

			SceneRequests.save({
				resourceType:"URL",
				resourceURI:$scope.url
			}).$promise.then(function(data){
				$location.path('/scene');
			});
			
			// $timeout(function(){
			// 	console.log('updating location to /#/scene/1234');
			// 	$location.path('/scene/1234');
			// },2000);
		}
	});

