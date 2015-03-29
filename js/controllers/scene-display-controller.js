angular.module('SceneSkeleton')
	.controller('SceneDisplayController',function($scope,$routeParams,Scene){
		Scene.query(function(data) {
			var scenes = data.filter(function(item){
				return item._id == $routeParams.sceneId;
			});

			if(scenes.length !== 1){
				throw new Error('Expected one scene, not '+scenes.length);
			}else{
				$scope.scene = scenes[0];
			}
		});
	});