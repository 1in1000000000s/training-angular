(function() {
  'use strict';

  angular.module('acme.homepage', [
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('homepage', {
        url: '/',
        abstract: true,
        views: {
          'layout@': {
            templateUrl: 'app/_shared/layouts/1col.html',
          },
        },
      })
      .state('homepage.index', {
        url: '',
        views: {
          '': {
            controller: 'Homepage.IndexController',
            templateUrl: 'app/homepage/views/index.html',
          },
        },
      });
  });
}());
