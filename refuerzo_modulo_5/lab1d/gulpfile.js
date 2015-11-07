var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');


gulp.task('concat-files', function(){
    gulp.src(['js/lab1a.js','js/lab1b.js','js/lab1c.js'])
        .pipe(concat('lab1.min.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('build/'))
});

gulp.task('minify-html' ,['concat-files'], function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('default',['minify-html'], function(){
});