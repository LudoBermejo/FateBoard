module.exports = function(gulp, plugins) {

	return function() {
		gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    	.pipe(plugins.uglify({
      		// inSourceMap:
      		// outSourceMap: "app.js.map"
    	}))
    	.pipe(gulp.dest('./dist/'))
	}

}