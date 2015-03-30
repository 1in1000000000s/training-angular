(function() {
  'use strict';


  angular.module('acme', [
    'ui.router',
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('homepage', {
        url: '',
        controller: 'BasicRoutingControllerA',
        template: '<h1>Hello from homepage</h1>\n' +
                  '<a ui-sref="artists">artists</a>',
      })
      .state('artists', {
        url: '/artists',
        controller: 'BasicRoutingControllerB',
        templateUrl: '/routing/basic-routing.tpl',
      });
  })


  .controller('BasicRoutingControllerA', function($scope) {})


  .controller('BasicRoutingControllerB', function($scope, artistsModel) {
    $scope.data = {};

    artistsModel.getArtists().then(function(res) {
      $scope.data.artists = res.data;
    });
  });

})();
