var connect = require('gulp-connect');

module.exports = function(gulp, plugins) {
	return function() {
		plugins.connect.server({
			root: 'dist/',
			port: 9999
		});
	}
}