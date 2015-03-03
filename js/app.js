angular.module('SceneSkeleton',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/scene/create.html',
				controller:'SceneCreateController'
			})
			.when('/scene/:id',{
				templateUrl:'templates/scene/display.html',
				controller:'SceneDisplayController'
			})
			.otherwise({
				redirectTo:'/'
			});
	}]);