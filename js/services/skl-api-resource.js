angular.module('SceneSkeleton')
	.factory("Scene", function($resource) {
		return $resource("http://skl-api-426627428.ap-southeast-2.elb.amazonaws.com/scene/:id");
	});