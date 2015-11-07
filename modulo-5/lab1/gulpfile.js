/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('js/*.js')
		.pipe(concat('lab1.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});

gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});