(function() {
  'use strict';

  angular.module('acme.homepage')
  .controller('Feed.IndexController', function($scope, postsModel) {
    $scope.data = {};

    postsModel.loadPosts().then(function(res) {
      $scope.data.posts = res.data.posts;
    });
  });

}());
