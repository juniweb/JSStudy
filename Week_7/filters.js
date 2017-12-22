angular.module('myApp', [])
	.filter('myFilter', ['$filter',
		function() {
			return function(item) {
				var _gender = '';
				
				if(item == 'W') {
					_gender = '여자';
				} else {
					_gender = '남자';
				}
				return _gender;
			}
		}
	])
	.controller('myCtrl', ['$scope', '$filter',
		function($scope, $filter) {
			$scope.myCurrency = 123456789;

			$scope.myDate = new Date();

			$scope.personList = [
				{
					'name'  : 'jun',
					'age'   : 33,
					'gender': 'W'
				},
				{
					'name'  : 'woo',
					'age'   : 28,
					'gender': 'M'
				},
				{
					'name'  : 'soo',
					'age'   : 25,
					'gender': 'M'
				}        
				];	
		}
	]);
	
	
