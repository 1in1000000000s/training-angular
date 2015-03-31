(function() {
  'use strict';

  angular.module('acme.shared')
  .factory('postsResource', function($resource, apiUrl) {


    var Resource = $resource(apiUrl + '/posts/:uuid', {

    }, {
      query: {
        method: 'GET',
        isArray: false,
        transformResponse: function(res) {
          var resJson;

          if (typeof res !== 'string' || !res.length) {
            return res;
          }

          try {
            resJson = angular.fromJson(res);
          } catch (e) {
            return res;
          }

          if (resJson.data == null || resJson.data.posts == null) {
            return res;
          }

          resJson.data.posts = _.map(resJson.data.posts, function(item) {
            return new Resource(item);
          });

          return resJson;
        },
      },
    });


    Resource.prototype.isEvent = function() {
      return !!this.event;
    };


    return Resource;
  });
}());
