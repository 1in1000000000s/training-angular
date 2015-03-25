(function() {
  'use strict';


  angular.module('acme', [
  ])

  .controller('AcmeController', function($scope) {
    $scope.data = {
      artists: [
        'B-complex',
        'Commix',
        'High contrast',
        'LTJ Bukem',
        'NU:Logic',
        'Pendulum',
      ],
    };
  });

})();
