/* eslint-env node */
/* eslint no-multi-spaces: 0 */
'use strict';

var del             = require('del');
var g               = require('gulp-load-plugins')();
var gulp            = require('gulp');
var runSequence     = require('run-sequence');


// === Paths ===

var src             = {toString: function() { return 'src'; }};
src.app             = {toString: function() { return src + '/app'; }};
src.app.files       = src.app + '/**/*.js';
src.app.templates   = src.app + '/**/*.html';
src.index           = src + '/index.html';

var dist            = {toString: function() { return 'dist'; }};
dist.index          = dist + '/index.html';
dist.app            = {toString:function() { return dist + '/app'; }};
dist.app.templates  = dist.app + '/templates.js';

var demos           = {toString: function() { return 'demos'; }};

var vendor          = {toString: function() { return 'bower_components'; }};


// === Develpement ===

gulp.task('clean', function(cb) {
  return del([
    dist + '/*',
  ], cb);
});

gulp.task('index', function() {
  var sources = gulp.src(src.app.files, {read: false});

  return gulp.src(src.index)
    .pipe(g.inject(sources, {
      addRootSlash: false,
      ignorePath: '/src',
    }))
    .pipe(gulp.dest(''+dist));
});

gulp.task('lint', function() {
  return gulp.src(src.app.files)
    .pipe(g.eslint())
    .pipe(g.eslint.format())
    .pipe(g.eslint.failAfterError());
});

gulp.task('templates', function() {
  return gulp.src(src.app.templates)
    .pipe(g.angularTemplatecache({
      module: 'acme.templates',
      standalone: true,
      root: 'app',
    }))
    .pipe(gulp.dest(''+dist.app));
});

gulp.task('serve', function() {
  return g.connect.server({
    host: 'localhost',
    port: '8000',
    root: [''+dist, ''+src],
    middleware: function(connect, options) {
      return [
        connect().use('/' + vendor, connect.static(''+vendor)),
      ];
    },
  });
});

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

gulp.task('watch', function() {
  g.livereload.listen();

  // compile handlers
  gulp.watch(src.app.files, ['index', 'lint']);
  gulp.watch(src.app.templates, ['templates']);
  gulp.watch(src.index, ['index']);

  // livereload handlers
  gulp.watch([
      src.app.files,
      dist.app.templates,
      dist.index,
    ]).on('change', g.livereload.changed);
});


// === Test tasks ===

gulp.task('karma', function() {
  gulp.src('foobar')  // intentional nonsense, files are configured in configFile
    .pipe(g.karma({
      action: 'watch',
      browsers: ['PhantomJS'],
      configFile: 'karma.conf.js',
    }))
      .on('error', function(err) { g.util.log(g.util.colors.red(err)); });
});


// === Main tasks definitions ===

gulp.task('default', function() {
  return runSequence(
    'lint',
    ['index', 'templates', 'serve'],
    'watch'
  );
});

gulp.task('demos', [
  'serve:demos',
]);
