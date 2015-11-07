var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');


gulp.task('concat-files', function(){
    gulp.src(['bower_components/angular/angular.min.js','bower_components/angular-route/angular-route.min.js'])
        .pipe(concat('angular2.min.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('js/'))
});

gulp.task('minify-html' ,['concat-files'], function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('default',['minify-html'], function(){
});