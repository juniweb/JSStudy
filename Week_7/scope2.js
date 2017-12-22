var app = angular.module('myApp', [])
			.run(function ($rootScope) {
				$rootScope.count = 0;
			});

app.controller('parentCtrl', function($scope, $rootScope) {
	$scope.name = 'jun';
	$scope.scopecount = 0;

	$scope.addCount = function() {
		$scope.scopecount = $scope.scopecount + 1;
		console.log($scope);
	}
});

app.controller('childCtrl', function($scope, $rootScope) {
	$scope.name = 'woo';

	$scope.addCount = function() {
		$scope.$parent.scopecount = $scope.$parent.scopecount + 1;
		console.log($scope);
	}
});

