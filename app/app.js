

angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController'
      })
      .when('/table', {
        templateUrl: 'app/views/table.html',
        controller: 'TableController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
