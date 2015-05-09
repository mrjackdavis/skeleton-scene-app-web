angular.module('SceneSkeleton')
	.controller('SceneListController',function($scope,Scene){
		$scope.scenes = [];
		Scene.query(function(data) {
			
			
			$scope.scenes = data.map(function(scene){
				if(scene.processes.length < 1){
					scene.status = 'Pending';
				}else{
					var finishedProcesses = scene.processes.filter(function (prcs) {
						return prcs.status == 'Complete';
					});
					var currentProcesses = scene.processes.filter(function (prcs) {
						return prcs.status == 'InProgress';
					});

					if(finishedProcesses.length > 0){
						scene.status = 'Complete';
					}else if(currentProcesses.length > 0){
						scene.status = 'In Progress';
					}else{
						scene.status = 'Unknown';
					}
				}
				return scene;
			});
		});
	});
