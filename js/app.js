angular.module('SceneSkeleton',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/scene/create.html'
			})
			.otherwise({
				redirectTo:'/'
			});
	}]);