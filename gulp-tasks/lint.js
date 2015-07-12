// Lint
module.exports = function(gulp, plugins) {
	return function() {
		  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    		.pipe(plugins.jshint())
    		.pipe(plugins.jshint.reporter('default'))
    		.pipe(plugins.jshint.reporter('fail'));
		
	}
}
