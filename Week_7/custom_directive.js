(function () {

    var directive = function () {
        return {
			restric1t: 'E',
			template: '<div>Hello AngularJS</div>',
			replace: true

        };
    };

	angular.module('myApp')
		.directive('myExample', directive);

}());