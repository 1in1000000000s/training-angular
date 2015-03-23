/* eslint-env node */
/* eslint no-multi-spaces: 0 */
'use strict';

var g               = require('gulp-load-plugins')();
var gulp            = require('gulp');


// === Paths ===

var demos           = {toString: function() { return 'demos'; }};

var vendor          = {toString: function() { return 'bower_components'; }};


// === Develpement ===

gulp.task('serve:demos', function() {
  return g.connect.server({
    host: 'localhost',
    port: '8001',
    root: ''+demos,
    middleware: function(connect, options) {
      return [
        connect().use('/' + vendor, connect.static(''+vendor)),
      ];
    },
  });
});


// === Main tasks definitions ===

gulp.task('demos', [
  'serve:demos',
]);
