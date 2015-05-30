angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,$interval,Scenes,SceneRequests){
		$scope.scenes = [];
		$scope.rows = [];
		$scope.numInProgress = 0;
		$scope.numPending = 0;

		// Get initial batch
		Scenes.query({size:15,page:0},function(data) {
			$scope.scenes = data;
			updateRows();
		});
		updateToastingStatus();

		// Setup automatic updating
		var interval = $interval(function(){
			console.log('Updating...');
			loadNew();
			updateToastingStatus();
		}, 6000);

		$scope.$on("$destroy", function() {
			if (interval) {
				$interval.cancel(interval);
			}
		});

		$scope.loadMore = function(){
			var params = {size:5,page:Math.ceil($scope.scenes.length/5)};
			console.log(params);
			Scenes.query(params,function(data) {
				console.log(data.length);
				data.forEach(function(newScene){
					$scope.scenes.push(newScene);
				});
				updateRows();
			});
		}



		function loadNew(){
			Scenes.query({size:15,page:0},function(data) {
				data.forEach(function(newScene){
					var matchingScenes = $scope.scenes.filter(function(scene){
						return scene.sceneID === newScene.sceneID;
					});
					if(matchingScenes.length === 0){
						$scope.scenes.unshift(newScene);
					}
				});
				updateRows();
			});
		}

		function updateRows(){
			$scope.rows = [];
			var currentRow = [];

			$scope.scenes.forEach(function(scene){
				if(currentRow.length >= 3){
					$scope.rows.push(currentRow);
					currentRow = [];
				}
				currentRow.push(scene);
			});
			if(currentRow.length > 0){
				$scope.rows.push(currentRow);
			}
		}

		function updateToastingStatus(){
			SceneRequests.query(function(data){
				$scope.numInProgress = data.filter(function(request){
					return request.status === 'IN_PROGRESS';
				}).length;

				$scope.numPending = data.filter(function(request){
					return request.status === 'PENDING';
				}).length;
			});
		}
	});
