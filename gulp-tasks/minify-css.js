module.exports = function(gulp, plugins) {
	return function() {
	  var opts = {comments:true,spare:true};
	  
	  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
	    		.pipe(plugins.minifyCss(opts))
	    		.pipe(gulp.dest('./dist/'))
	}
}