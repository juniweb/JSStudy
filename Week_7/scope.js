var app = angular.module('myApp', [])
			.run(function ($rootScope) {
				$rootScope.count = 0;
			});

app.controller('myCtrl', function($scope, $rootScope) {
	$scope.name = 'jun';
	$scope.scopecount = 0;

	$scope.changeScope = function() {
		$scope.scopecount = $scope.scopecount + 1;
		console.log($scope);
	}

	$scope.changeRoot = function() {
		$rootScope.count = $rootScope.count + 1;
		console.log($rootScope);
	}
});

app.controller('youCtrl', function($scope, $rootScope) {
	$scope.name = 'woo';
	$scope.scopecount = 0;

	$scope.changeScope = function() {
		$scope.scopecount = $scope.scopecount + 1;
		console.log($scope);
	}

	$scope.changeRoot = function() {
		$rootScope.count = $rootScope.count + 1;
		console.log($rootScope);
	}	
});

