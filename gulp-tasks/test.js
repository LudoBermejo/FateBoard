
/**
 * Run test once and exit
 */

 module.exports = function(gulp, plugins) {
 	return function() {
 		plugins.karma.server.start({
    		configFile: __dirname + '/../karma.conf.js',
    		singleRun: true
  		}, null);
 	}
 }
