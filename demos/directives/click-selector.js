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
      selected: null,
    };
  })

  .directive('clickSelector', function() {
    return {
      templateUrl: 'click-selector.tpl',

      link: function(scope, el, attrs) {
        scope.select = function(artist) {
          scope.data.selected = artist;
        };
      },
    };
  });

})();
