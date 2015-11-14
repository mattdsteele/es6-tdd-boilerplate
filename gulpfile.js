var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-core/register');

gulp.task('test', () => {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('default', () => {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
