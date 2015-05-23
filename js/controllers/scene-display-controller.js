angular.module('SceneSkeleton')
	.controller('SceneDisplayController',function($scope,$routeParams,Scenes){
		var scene = Scenes.get({id:$routeParams.sceneId,completedAt:$routeParams.completedAt},function(){
			$scope.scene = scene;
		});
	});