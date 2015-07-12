var connect = require('gulp-connect');

module.exports = function(gulp, plugins) {
	return function() {
		plugins.connect.server({
			root: 'app/',
			port: 8888
		});
	}
}