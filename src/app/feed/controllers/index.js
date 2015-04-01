(function() {
  'use strict';

  angular.module('acme.homepage')
  .controller('Feed.IndexController', function($scope, postsModel) {
    $scope.data = {};
    $scope.meta = {};

    this.loadMore = function() {
      postsModel.loadMore();
    };

    this.addNewPost = function() {
      postsModel.addNewPost($scope.data.newPostText);
      $scope.data.newPostText = '';
    };


    postsModel.loadPosts()
      .then(function(res) {
        $scope.data.posts = res.data.posts;
        $scope.meta.posts = res.meta.posts;
      })
      .catch(function() {
        //alert('server error');
      });
  });
}());
