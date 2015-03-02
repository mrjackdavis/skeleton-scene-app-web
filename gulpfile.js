var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function() {

});

gulp.task('start', function() {
	connect.server({
		root: './',
		livereload: true
	});
});