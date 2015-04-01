(function() {
  'use strict';

  angular.module('acme.homepage')
  .controller('Feed.IndexController', function($scope, postsModel, growl) {
    $scope.data = {};
    $scope.meta = {};

    this.loadMore = function() {
      postsModel.loadMore();
    };

    this.addNewPost = function(newPostText) {
      postsModel.addNewPost(newPostText)
      .catch(function() {
        growl.warning('Error saving new post', {title: 'Server error!'});
      });
    };


    postsModel.loadPosts()
      .then(function(res) {
        $scope.data.posts = res.data.posts;
        $scope.meta.posts = res.meta.posts;
      });
  });
}());
