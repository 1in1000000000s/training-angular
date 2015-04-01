(function() {
  'use strict';

  angular.module('acme.feed')
  .directive('post', function() {

    return {
      restrict: 'EA',
      templateUrl: 'app/feed/directives/post/post.html',
      scope: {
        postData: '=',
      },

      controllerAs: 'ctrl',
      controller: function($scope, $element, $compile, $modal) {
        var formEl;

        this.editPost = function() {
          var el = angular.element('<new-post-form post-text="postData.text" submit-method="ctrl.savePost(newPostText)"></new-post-form>');
          formEl = $compile(el)($scope);

          $element.addClass('editing');
          $element.append(formEl);
        };

        this.savePost = function(postText) {
          // TODO save postText to API

          formEl.scope().$destroy();
          formEl.remove();
          $element.removeClass('editing');
        };

        this.deletePost = function() {
          var modalScope = $scope.$new();
          modalScope.uuid = $scope.postData.uuid;
          modalScope.author = $scope.postData.author.displayname;

          $modal
            .open({
              scope: modalScope,
              controllerAs: 'ctrl',
              controller: 'deletePostConfirmationController',
              templateUrl: 'app/feed/modals/deletePostConfirmation.html',
            })
            .result
            .then(function() {
              console.log('OK delete');
            })
            .catch(function() {
              console.log('cancel');
            });
        };
      },
    };
  })

  .controller('deletePostConfirmationController', function($scope, $stateParams) {
    this.foo = function() {
      $scope.uuid += 'foo';
      $scope.$close();
    };
  });
}());
