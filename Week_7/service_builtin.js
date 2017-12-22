var app = angular.module('myApp', [])
			.run(function ($rootScope) {
				$rootScope.count = 0;
			});

app.controller('myCtrl', function($scope, $rootScope, $location, $http, $timeout, $interval) {
	
	$scope.host = $location.host();
	$scope.httpResult = {};

	$scope.timeoutResult = {};
	$scope.interval = 0;


	$http.get('https://api.github.com/users')
	.then(function (response) {
		$scope.httpResult = response.data;
	}, function (response) {
		$scope.httpResult = "Http Error";
	});

	$timeout(function(){

		$http.get('https://api.github.com/users/defunkt')
		.then(function (response) {
			$scope.timeoutResult = response.data;
		}, function (response) {
			$scope.timeoutResult = "Http timeout Error";
		});		
		
	}, 5000);

	$interval(function(){
		$scope.interval = $scope.interval + 1;
	}, 2000);


});
