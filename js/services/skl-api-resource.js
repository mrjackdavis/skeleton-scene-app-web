var SKL_API_URL = 'http://api.toast-it.io/v0-2';
// var SKL_API_URL = 'http://dockervm:8080/v0-2';

angular.module('SceneSkeleton')
	.factory("Scenes", function($resource) {
		var service = $resource(SKL_API_URL+"/scenes/:id/:completedAt",{},{
			get:{
				transformResponse:function(data,header){
					var scene = JSON.parse(data);
					return NormaliseScene(scene);
				}
			},
			query:{
				isArray: true,
				transformResponse:function(data,header){
					var scenes = angular.fromJson(data);
					console.log(scenes);
					return scenes.map(NormaliseScene);
				}
			}
		});
		return service;
	});

angular.module('SceneSkeleton')
	.factory("SceneRequests", function($resource) {
		var service = $resource(SKL_API_URL+"/scene-requests/:id/:createdAt",{},{
			get:{
				transformResponse:function(data,header){
					var scene = JSON.parse(data);
					return NormaliseScene(scene);
				}
			},
			query:{
				isArray: true,
				transformResponse:function(data,header){
					var scenes = angular.fromJson(data);
					console.log(scenes);
					return scenes.map(NormaliseScene);
				}
			}
		});
		return service;
	});

angular.module('SceneSkeleton')
	.factory("Generators", function($resource) {
		var service = {
			query:function(){
				return [
					"Snowflake"
				];
			}
		}
		return service;
	});

function NormaliseScene(scene){
	return scene;
}