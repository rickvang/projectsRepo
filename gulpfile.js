var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var sass = require('gulp.sass');
var connect = require('gulp-connect')
gulp.task('connect', function(){
    connect.server({
        root:'public',
        port:4000
    })
});
gulp.task('sass', function () {
	gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/assets/styles'));
});