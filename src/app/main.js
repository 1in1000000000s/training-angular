(function() {
  'use strict';

  angular.module('acme', [
    'ngAnimate',
    'ngResource',
    'ui.router',

    'acme.templates',
    'acme.shared',
    'acme.feed',
    'acme.homepage',
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('error', {
        abstract: true,
        views: {
         'layout@': {
            templateUrl: 'app/_shared/layouts/1col.html',
          },
        },
      })
      .state('error.404', {
        url: '*path',
        template: '<h2>err 404</h2>',
      });
  })

  .config(function(apiProvider) {
    apiProvider.setBaseUrl('http://localhost:3000/fakeapi');
  })

  .run(function($location, $state) {
    if ($location.path() === '') {
      $state.go('homepage.index');
    }
  });
}());
