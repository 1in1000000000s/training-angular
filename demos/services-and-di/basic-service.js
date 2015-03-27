(function() {
  'use strict';


  angular.module('acme')

  .controller('BasicServiceController', function($scope, artistsModel) {
    $scope.data = {
      artists: artistsModel.getArtists(3),
      selected: null,
    };
  })

  .service('artistsModel', function() {
    var artists = [
      {name: 'B-complex', avatar: 'b-complex.jpg'},
      {name: 'Commix', avatar: 'commix.jpg'},
      {name: 'High contrast', avatar: 'high-contrast.jpg'},
      {name: 'LTJ Bukem', avatar: 'ltj-bukem.jpg'},
      {name: 'NU:Logic', avatar: 'nu-logic.jpg'},
      {name: 'Pendulum', avatar: 'pendulum.jpg'},
    ];

    this.getArtists = function(limit) {
      return artists.slice(0, limit);
    };
  });

})();
