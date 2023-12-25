angular.module('myApp')
  .controller('LoginController', function($scope, $location) {
    $scope.username = '';
    $scope.password = '';
    $scope.errorMessage = '';

    $scope.login = function() {
      if ( $scope.validatePassword()) {

        $location.path('/table');
      } else {
        $scope.errorMessage = 'Password must be at least 8 characters, contain one special character, and one number.';
      }
    };

    $scope.isPasswordValid = false;

    $scope.clearErrorMessage = function() {
      $scope.errorMessage = '';
    };

    $scope.checkPassword = function() {
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      $scope.isPasswordValid = regex.test($scope.password);

      if (!$scope.isPasswordValid) {
        $scope.errorMessage = '  Password must be at least 8 characters, contain one special character, and one number.';
      } else {
        $scope.errorMessage = '';
      }
    };


    $scope.validateUsername = function() {
      return $scope.username.length >= 8;
    };

    $scope.validatePassword = function() {
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      return passwordRegex.test($scope.password);
    };
  });
