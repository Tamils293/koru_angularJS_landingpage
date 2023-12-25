angular.module('myApp').controller('ConfirmationPopupController', function ($scope, $uibModalInstance, selectedRows) {
    $scope.selectedRows = selectedRows;

    $scope.confirmDelete = function () {
      $uibModalInstance.close();
    };

    $scope.cancelDelete = function () {
      $uibModalInstance.dismiss();
    };
  });