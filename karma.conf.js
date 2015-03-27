/* eslint-env node */
'use strict';


module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine',
    ],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'demos/controllers-and-scope/scope-nesting-fixed.js',
      'demos/services-and-di/http-example.js',
      'tests/demos/**/*.js',
    ],

    reporters: [
      'progress',
    ],
  });
};
