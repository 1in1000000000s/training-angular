(function() {
  'use strict';

  angular.module('acme.shared')
  .factory('postsResource', function($resource, apiUrl) {


    var apiResource = $resource(apiUrl + '/posts/:uuid', {

    }, {
      query: {
        method: 'GET',
        isArray: false,
      },
    });

    return apiResource;
  });
}());
