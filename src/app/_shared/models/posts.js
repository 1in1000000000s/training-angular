(function() {
  'use strict';

  angular.module('acme.shared')
  .service('postsModel', function(api) {
    var requestsCache = {};


    this.loadPosts = function() {
      if (!requestsCache.loadPosts) {
        requestsCache.loadPosts = api.posts.get();
      }

      return requestsCache.loadPosts;
    };

    this.loadMore = function() {
      this.loadPosts().then(function(res) {
        var promise = api.posts.get({from: res.data.posts.length + 1});
        promise.then(function(loadMoreRes) {
          [].push.apply(res.data.posts, loadMoreRes.data.posts);
          res.meta.posts.hasMore = loadMoreRes.meta.posts.hasMore;
        });
      });
    };

    this.addNewPost = function(newPostText) {
      var newPost = {
        author: {
          displayname: 'John Doe',
        },
        text: newPostText,
      };

      this.loadPosts().then(function(res) {
        res.data.posts.unshift(newPost);
      });

      var savePromise = api.posts.save(newPost);
      savePromise.catch(function() {
        this.loadPosts().then(function(res) {
          var idx = _.findIndex(res.data.posts, newPost);
          res.data.posts.splice(idx, 1);
        });
      }.bind(this));


      return savePromise;
    };
  });
}());
