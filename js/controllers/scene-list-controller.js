angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,Scene){
		$scope.scenes = [];
		Scene.query(function(data) {
			$scope.rows = [];
			$scope.totalScenes = data.length;

			var scenes =  data.sort(function(a,b){
				return a.dateCreated < b.dateCreated;
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
