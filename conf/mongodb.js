var mongoose = require('mongoose');
var mongodbOptions = {};
var mongodbURL = 'mongodb://fateboard:thisistheriver@ds053428.mongolab.com:53428/fateboard';

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) {
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

module.exports = mongoose;