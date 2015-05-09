angular.module('SceneSkeleton')
	.factory("Scene", function($resource) {
		var service = $resource("http://skl-api-426627428.ap-southeast-2.elb.amazonaws.com/scene/:id/:dateCreated",{},{
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

		// var resource = angular.extend(service.prototype,{
		// 	get:function(params,cb){
		// 		return service.get(params, function(scene){
		// 				cb(NormaliseScene(scene));
		// 			});
		// 	},
		// });

		return service;
	});

function NormaliseScene(scene){

	if(!scene.processes){
		throw new Error('No processes in scene')
	}

	scene.completeProcesses = scene.processes.filter(function (prcs) {
		return prcs.status == 'Complete';
	});
	scene.runningProcesses = scene.processes.filter(function (prcs) {
		return prcs.status == 'InProgress';
	});

	if(scene.processes.length < 1){
		scene.status = 'Pending';
	}else{
		if(scene.completeProcesses.length > 0){
			scene.status = 'Complete';
		}else if(scene.runningProcesses.length > 0){
			scene.status = 'In Progress';
		}else{
			scene.status = 'Unknown';
		}
	}
	return scene;
}