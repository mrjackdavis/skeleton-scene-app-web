angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,$interval,Scenes,SceneRequests){
		$scope.page = 0;

		function updateSceneList(){
			$scope.scenes = [];

			Scenes.query({size:21,page:$scope.page},function(data) {
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
				console.log(scenes.length);
			});
			SceneRequests.query(function(data){
				$scope.numInProgress = data.filter(function(request){
					return request.status === 'IN_PROGRESS';
				}).length;

				$scope.numPending = data.filter(function(request){
					return request.status === 'PENDING';
				}).length;
			});
		}
		
		updateSceneList();

		var interval = $interval(updateSceneList, 54000);

		$scope.$on("$destroy", function() {
			if (interval) {
				$interval.cancel(interval);
			}
		});

		$scope.setPage = function(page){
			$scope.page = page;
			updateSceneList();
		}
	});
