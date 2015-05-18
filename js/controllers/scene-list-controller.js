angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,Scenes){
		$scope.scenes = [];
		Scenes.query(function(data) {
			$scope.rows = [];
			$scope.totalScenes = data.length;

			var scenes =  data.sort(function(a,b){
				return a.createdAt < b.createdAt;
			});

			var currentRow = [];

			scenes.forEach(function(scene){
				if(currentRow.length >= 3){
					$scope.rows.push(currentRow);
					currentRow = [];
				}
				currentRow.push(scene);
			});
			if(currentRow.length > 0){
				$scope.rows.push(currentRow);
			}
		});
	});
