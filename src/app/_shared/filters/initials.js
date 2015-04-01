(function() {
  'use strict';

  angular.module('acme.shared')
  .filter('initials', function() {

    return function(input, params, moreparas) {
      var parts = input.split(/\s+/);

      var initials = _.reduce(parts, function(memo, part) {
        memo += part[0];
        return memo;
      }, '');

      return initials;
    };
  });
}());
