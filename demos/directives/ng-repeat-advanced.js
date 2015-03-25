(function() {
  'use strict';


  angular.module('acme', [
  ])

  .controller('AcmeController', function($scope) {
    $scope.data = {
      artists: [
        {name: 'B-complex', avatar: 'b-complex.jpg'},
        {name: 'Commix', avatar: 'commix.jpg'},
        {name: 'High contrast', avatar: 'high-contrast.jpg'},
        {name: 'LTJ Bukem', avatar: 'ltj-bukem.jpg'},
        {name: 'NU:Logic', avatar: 'nu-logic.jpg'},
        {name: 'Pendulum', avatar: 'pendulum.jpg'},
      ],
    };
  });

})();
