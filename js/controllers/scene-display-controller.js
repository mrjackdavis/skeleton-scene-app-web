angular.module('SceneSkeleton')
	.controller('SceneDisplayController',function($scope,$routeParams,Scene){
		var scene = Scene.get({id:$routeParams.sceneId,dateCreated:$routeParams.dateCreated},function(){
			$scope.scene = scene;
		});
	});