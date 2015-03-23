(function() {
  'use strict';


  angular.module('acme', [
  ])

  .controller('AcmeController', function($scope) {
    $scope.name = 'Ferko Mrkvička';

    $scope.setName = function() {
      $scope.name = 'Betty Lee';
    };
  });

})();
