angular.module('myApp', [])
	.controller('myCtrl', function($scope) {
		$scope.name = 'juniweb';

		$scope.person = {
			name : 'heejun',
			age : 33
		}
		
		$scope.fnClick = function () {
			$scope.readonly = !$scope.readonly;
		}
		
		$scope.readonly = false;
	});
