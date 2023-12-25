angular.module('myApp')
  .service('DataService', function($http) {
    this.getData = function() {
      return $http.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
        return response.data;
      });
    };
  });
