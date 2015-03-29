angular.module('SceneSkeleton')
	.factory("Scene", function($resource) {
		return $resource("http://dockervm:8081/scene/:id");
	});