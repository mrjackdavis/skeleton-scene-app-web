var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('default', function() {

});

gulp.task('build', function() {
	return gulp.src('./less/**')
		.pipe(less())
		.pipe(gulp.dest('./css'));
});

gulp.task('start', function() {
	connect.server({
		root: './',
		livereload: true
	});
});