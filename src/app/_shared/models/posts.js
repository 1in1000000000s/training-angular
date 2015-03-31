(function() {
  'use strict';

  angular.module('acme.shared')
  .service('postsModel', function(postsResource) {
    var requestsCache = {};


    this.loadPosts = function() {
      if (!requestsCache.loadPosts) {
        requestsCache.loadPosts = postsResource.query();
      }

      return requestsCache.loadPosts.$promise;
    };
  });
}());
