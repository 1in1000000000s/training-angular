(function() {
  'use strict';


  angular.module('acme')

  .controller('NgFormController', function($scope, artistsModel) {
    $scope.data = {
      selected: null,
      fruits: [
        'Apple',
        'Banana',
        'Kiwi',
        'Orange',
      ],
      idFruits: [
        {id: 111, name: 'Apple'},
        {id: 222, name: 'Banana'},
        {id: 333, name: 'Kiwi'},
        {id: 444, name: 'Orange'},
      ],
    };

    this.save = function() {
      artistsModel.save($scope.data.artistName);
      $scope.data.artistName = '';
      $scope.data.showLoader = true;
    };


    artistsModel.getArtists().then(function(res) {
      $scope.data.artists = res.data;
    });
  })

  .service('artistsModel', function($http) {
    var artists = null;

    this.getArtists = function() {
      if (!artists) {
        artists = $http.get('/_assets/artists.json');
      }

      return artists;
    };

    this.save = function(artistName) {
      var newArtist = {
        name: artistName,
        avatar: 'dj-anonym.png',
      };

      // TODO save to server

      this.getArtists().then(function(res) {  // store newArtist to current collection
        res.data.unshift(newArtist);
      });
    };
  });

})();
