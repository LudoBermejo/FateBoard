// gulp
var gulp = require('gulp');

// plugins. We need to add "del" package, becasue gulp-load-plugins can't load this package
// (it only loads those who starts with gulp-)
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'karma'],
  replaceString: /\bgulp[\-.]/
});



gulp.task('lint', require('./gulp-tasks/lint')(gulp, plugins));
gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins));
gulp.task('minify-css', require('./gulp-tasks/minify-css')(gulp, plugins));
gulp.task('minify-js', require('./gulp-tasks/minify-js')(gulp, plugins));
gulp.task('copy-bower-components', require('./gulp-tasks/copy-bower-components')(gulp, plugins));
gulp.task('copy-html-files', require('./gulp-tasks/copy-html-files')(gulp, plugins));
gulp.task('connect', require('./gulp-tasks/connect')(gulp, plugins));
gulp.task('connect-dist', require('./gulp-tasks/connect-dist')(gulp, plugins));
gulp.task('test', require('./gulp-tasks/test')(gulp, plugins));
gulp.task('tdd', require('./gulp-tasks/tdd')(gulp, plugins));

// default task
gulp.task('default',
  ['tdd']
);

// build task
gulp.task('build',
  ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connect-dist']
);