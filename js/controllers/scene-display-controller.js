angular.module('SceneSkeleton')
	.controller('SceneDisplayController',function($scope,$routeParams,Scenes){
		var scene = Scenes.get({id:$routeParams.sceneId,completedAt:$routeParams.completedAt},function(){
			$scope.scene = scene;

			var completeAtMoment = moment(scene.completedAt,'x');
			var requestedAtMoment = moment(scene.requestedAt,'x');

			$scope.timeSinceComplete = completeAtMoment.fromNow();
			$scope.timeToGenerate = requestedAtMoment.to(completeAtMoment);
		});
	});