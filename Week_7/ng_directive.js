angular.module('myApp', [])
.controller('myCtrl', function($scope) {
  $scope.name = 'juniweb';

  $scope.greeting = "hello";

  $scope.imageUrl = "./images/default.jpg";

  $scope.mtDisabled = false;

  $scope.myReadonly = false;

  $scope.myClass = false;

  $scope.myInputClass = '';

  $scope.getClass = function() {
    var _class = '';

    if($scope.myInputClass == 'red') {
      _class = 'red'

    } else if($scope.myInputClass == 'green') {
      _class = 'green'
    } else {
      _class = 'blue'
    }

    return _class;
  }

  $scope.myStyleColor = '';

  $scope.myCount = 0;

  $scope.myButtonClick = function() {
    $scope.myCount = $scope.myCount + 1;
  }


  $scope.myCheckbox = false;
  $scope.myCheckboxResult = '';

  $scope.myChange = function() {
    if ($scope.myCheckbox) {
      $scope.myCheckboxResult = "Checked";
    } else {
      $scope.myCheckboxResult = "UnChecked";
    }
  }

  $scope.myShow = false;

  $scope.myHide = false;

  $scope.personList = [
    {
      'name'  : 'jun',
      'age'   : 33
    },
    {
      'name'  : 'woo',
      'age'   : 28
    },
    {
      'name'  : 'soo',
      'age'   : 25
    }        
  ];


  

});