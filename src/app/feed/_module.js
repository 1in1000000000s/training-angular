(function() {
  'use strict';

  angular.module('acme.feed', [
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('feed', {
        url: '/feed',
        abstract: true,
        views: {
          'layout@': {
            templateUrl: 'app/_shared/layouts/2cols.html',
          },
        },
      })
      .state('feed.index', {
        url: '',
        views: {
          '': {
            controller: 'Feed.IndexController as ctrl',
            templateUrl: 'app/feed/views/index.html',
          },
        },
      });
  });
}());
