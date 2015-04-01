(function() {
  'use strict';

  angular.module('acme.shared')
  .factory('err401Interceptor', function($q, $injector) {
    var $state;


    return {
      responseError: function(response) {
        if (response.status !== 401) {
          return response;
        }

        $state = $state || $injector.get('$state');
        $state.go('auth.login');

        return $q.reject();
      },
    };
  });
}());
