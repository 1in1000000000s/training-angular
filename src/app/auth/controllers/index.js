(function() {
  'use strict';

  angular.module('acme.auth')
  .controller('Auth.LoginController', function($scope, $state, $localStorage, api) {
    $scope.data = {};

    this.login = function() {
      api.auth.login($scope.data)
        .then(function(res) {
          $localStorage.jwtToken = res.jwtToken;
          $state.go('feed.index');
        });
    };
  });
}());
