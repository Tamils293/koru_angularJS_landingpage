  angular.module('myApp')
    .controller('TableController', function($scope, DataService) {

      DataService.getData().then(function(data) {
        $scope.tableData = data;
      });

      $scope.deleteRow = function(id) {
   
        $scope.tableData = $scope.tableData.filter(row => row.id !== id);
      };

      $scope.sortTable = function(column) {

        $scope.tableData = $scope.tableData.sort((a, b) => a[column].localeCompare(b[column]));
      };

      $scope.dragStart = function(event) {
        event.dataTransfer.setData('text/plain', event.target.innerHTML);
      };

      
    });
