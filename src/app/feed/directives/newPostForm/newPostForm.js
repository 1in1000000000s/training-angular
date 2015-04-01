(function() {
  'use strict';

  angular.module('acme.feed')
  .directive('newPostForm', function() {

    return {
      restrict: 'EA',
      templateUrl: 'app/feed/directives/newPostForm/newPostForm.html',
      scope: {
        postText: '=?',
        submitMethod: '&',
      },

      controllerAs: 'ctrl',
      controller: function($scope) {
        this.submit = function() {
          $scope.submitMethod({newPostText: $scope.postText});
          $scope.newPostText = '';
        };
      },
    };
  });
}());
