angular.module('SceneSkeleton')
	.controller('SceneCreateController',function($scope){
		$scope.CreateScene = CreateScene;
		$scope.url = 'whoa';
	});

function CreateScene(url){
	alert(url);
}