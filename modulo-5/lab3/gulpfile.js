var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');


gulp.task('concat-css', function(){
    return gulp.src(['css/*.css'])
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('minify-css', ['concat-css'], function(){
  return gulp.src('css/styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/dist/'));
});


gulp.task('concat-files',['minify-css'], function(){
   return gulp.src(['js/jquery-1.11.3.min.js', 'js/lab3.js'])
        .pipe(concat('lab3.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});

gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});