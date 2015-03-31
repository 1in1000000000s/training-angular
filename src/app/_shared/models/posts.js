(function() {
  'use strict';

  angular.module('acme.shared')
  .service('postsModel', function(postsResource) {



    this.loadPosts = function() {
      var reqPromise = postsResource.query().$promise;

      return reqPromise;
    };
  });
}());
