(function() {
  'use strict';

  angular.module('acme', [
    'ui.router',

    'acme.templates',
    'acme.homepage',
  ])

  .run(function($location, $state) {
    if ($location.path() === '') {
      $state.go('homepage.index');
    }
  });

}());
