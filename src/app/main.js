(function() {
  'use strict';

  angular.module('acme', [
    'angularStats',
    'angular-jwt',
    'angular-growl',
    'ngAnimate',
    'ngResource',
    'ngStorage',
    'ui.bootstrap',
    'ui.router',

    'acme.templates',
    'acme.shared',
    'acme.auth',
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

  .config(function($httpProvider, jwtInterceptorProvider, apiProvider) {
    jwtInterceptorProvider.tokenGetter = function($localStorage) {
      return $localStorage.jwtToken;
    };

    $httpProvider.interceptors.push('jwtInterceptor');
    apiProvider.setBaseUrl('http://localhost:3000/fakeapi');
  })

  .config(function(growlProvider) {
    growlProvider.globalTimeToLive(3000);
    growlProvider.globalDisableCloseButton(true);
  })

  .run(function($location, $state) {
    if ($location.path() === '') {
      $state.go('homepage.index');
    }
  });
}());
