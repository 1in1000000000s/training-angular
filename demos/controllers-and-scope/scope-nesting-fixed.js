(function() {
  'use strict';


  angular.module('acme', [
  ])

  .controller('AcmeController', function($scope) {
    $scope.data = {
      name: 'Ferko Mrkvička',
    };

    this.setName = function(name) {
      $scope.data.name = name;
    };
  })

  .controller('FooController', function($scope) {
    this.setName = function(name) {
      $scope.data.name = name;
    };
  });

})();
