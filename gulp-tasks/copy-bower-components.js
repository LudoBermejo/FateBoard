module.exports = function(gulp, plugins) {
	return function() {
		  gulp.src('./app/bower_components/**')
    	 .pipe(gulp.dest('dist/bower_components'));
	}
}
