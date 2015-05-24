angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,Scenes,SceneRequests){
		$scope.scenes = [];
		Scenes.query(function(data) {
			$scope.rows = [];
			$scope.totalScenes = data.length;

			var scenes =  data;

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
		SceneRequests.query(function(data){
			$scope.numInProgress = data.filter(function(request){
				return request.status === 'IN_PROGRESS';
			}).length;

			$scope.numPending = data.filter(function(request){
				return request.status === 'PENDING';
			}).length;
		});
	});