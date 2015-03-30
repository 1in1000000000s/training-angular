(function() {
  'use strict';

  angular.module('acme.homepage', [
  ])

  .config(function($stateProvider) {

    $stateProvider
      .state('homepage', {
        url: '',
        controller: 'Homepage.IndexController',
        templateUrl: 'app/homepage/views/index.html',
      });
  });
}());
