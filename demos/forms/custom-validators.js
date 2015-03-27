(function() {
  'use strict';


  angular.module('acme')

  .directive('minTwoWords', function($timeout) {
    return {
      restrict: 'A',
      require: 'ngModel',

      link: function(scope, el, attrs, ngModel) {
        var rawEl = el[0];

        ngModel.$validators.minTwoWords = function(modelValue, viewValue) {
          if (ngModel.$isEmpty(modelValue)) {
            return false;  // consider empty models to be invalid
          }

          var parts = viewValue.split(/\s+/);
          rawEl.setCustomValidity('');

          if (parts.length >= 2) {
            return true;
          } else {
            rawEl.setCustomValidity('You must enter min. two words');
            return false;
          }
        };
      },
    };
  });

})();
