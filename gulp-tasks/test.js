
/**
 * Run test once and exit
 */


 module.exports = function(gulp, plugins) {
 	return function() {
		 var path = __dirname + '/../karma.conf.js';
		 console.log(path);
		 var config = plugins.karmaParseConfig(path, {singleRun: true});
		 var server = new plugins.karma.Server(config, null); 
		 server.start();
 	}
 }


