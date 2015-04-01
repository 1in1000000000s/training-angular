(function() {
  'use strict';

  angular.module('acme.auth', [
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        views: {
          'layout@': {
            templateUrl: 'app/_shared/layouts/1col.html',
          },
        },
      })
      .state('auth.login', {
        url: '/login',
        views: {
          '': {
            controllerAs: 'ctrl',
            controller: 'Auth.LoginController',
            templateUrl: 'app/auth/views/login.html',
          },
        },
      });
  })

  .config(function(apiProvider) {
    apiProvider.endpoint('auth')
      .route('/auth/:action')
      .addUnsecuredAction('login', 'POST', {action: 'login'});
  });
}());
