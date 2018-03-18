var gulp = require('gulp');
var sass = require('gulp-sass');

// compile scss
gulp.task('styles', function() {
  gulp.src('assets/scss/screen.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('assets/css/'))
});

// watch the folder
gulp.task('default', function(){
  gulp.watch('assets/scss/screen.scss', ['styles']);
});
