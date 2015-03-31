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

    this.loadMore = function() {
      this.loadPosts().then(function(res) {
        var promise = postsResource.query({from: res.data.posts.length + 1}).$promise;
        promise.then(function(loadMoreRes) {
          [].push.apply(res.data.posts, loadMoreRes.data.posts);
          res.meta.posts.hasMore = loadMoreRes.meta.posts.hasMore;
        });
      });
    };
  });
}());
