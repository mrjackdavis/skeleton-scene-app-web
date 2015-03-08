var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var s3 = require("gulp-s3");
var fs = require("fs");

gulp.task('default',['build','start'], function() {

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

gulp.task('deploy',['build'],function(){
	aws = JSON.parse(fs.readFileSync('./aws.json'));
	gulp.src(['./bower_components/**','./css/**','./js/**','./templates/**','./index.html','./package.json'],{cwdbase: true})
	    .pipe(s3(aws));
});