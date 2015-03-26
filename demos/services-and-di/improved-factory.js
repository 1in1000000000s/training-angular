(function() {
  'use strict';


  angular.module('acme')

  .controller('ImprovedFactoryController', function($scope, getArtists) {
    $scope.data = {
      artists: getArtists(3),
      selected: null,
    };
  })

  .factory('getArtists', function() {
    var artists = [
      {name: 'B-complex', avatar: 'b-complex.jpg'},
      {name: 'Commix', avatar: 'commix.jpg'},
      {name: 'High contrast', avatar: 'high-contrast.jpg'},
      {name: 'LTJ Bukem', avatar: 'ltj-bukem.jpg'},
      {name: 'NU:Logic', avatar: 'nu-logic.jpg'},
      {name: 'Pendulum', avatar: 'pendulum.jpg'},
    ];

    return function(limit) {
      return artists.slice(0, limit);
    };
  });

})();
