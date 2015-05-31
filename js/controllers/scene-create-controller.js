angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope,$location,$timeout,SceneRequests,Generators){
		$scope.url = '';
		$scope.Generators = Generators.query();
		$scope.SelectedGenerator = $scope.Generators[0];


		$scope.CreateScene = function CreateScene(url){
			$scope.loading = true;

			SceneRequests.save({
				resourceType:"URL",
				resourceURI:$scope.url,
				generatorName:$scope.SelectedGenerator
			}).$promise.then(function(data){
				$location.path('/scene');
			});
		}
	});

