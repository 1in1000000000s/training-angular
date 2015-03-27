(function() {
  'use strict';


  angular.module('acme')

  .controller('HttpExampleController', function($scope, artistsModel) {
    $scope.data = {
      selected: null,
    };

    artistsModel.getArtists(3).then(function(res) {
      $scope.data.artists = res.data;
    });
  })

  .service('artistsModel', function($http) {
    var artists = null;

    this.getArtists = function(limit) {
      if (!artists) {
        artists = $http.get('/_assets/artists.json');
        artists.then(function(res) {
          return res.data.splice(0, limit);
        });
      }

      return artists;
    };
  });

})();
