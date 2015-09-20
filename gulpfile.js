var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the scss task
gulp.task('build-css', function() {
  return gulp.src([
      'sass/main.scss'
    ])
    .pipe(sourcemaps.init())
      .pipe(sass()
        .on('error', function(err) {
          notify({title: "Sass Error"}).write(err);
          this.emit('end');
        })
      )
      .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(notify("Css compiled!"));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['scss/**/*.scss'], ['build-css'])
    .on('change', function(event) {
      gutil.log('File ' + gutil.colors.magenta(event.path) + ' was ' + event.type + '...');
    });
});
