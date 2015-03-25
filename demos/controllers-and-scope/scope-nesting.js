(function() {
  'use strict';


  angular.module('acme', [
  ])

  .controller('AcmeController', function($scope) {
    $scope.name = 'Ferko Mrkvička';

    this.setName = function(name) {
      $scope.name = name;
    };
  })

  .controller('FooController', function($scope) {
    this.setName = function(name) {
      $scope.name = name;
    };
  });

})();
