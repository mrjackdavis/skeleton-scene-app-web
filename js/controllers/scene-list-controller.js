angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,Scene){
		$scope.scenes = [];
		Scene.query(function(data) {
			$scope.scenes = data;
		});
	});
