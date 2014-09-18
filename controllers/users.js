var validation = require("./../libs/validation")
var Promise = require("bluebird");

var UserModel = require("./../models/UserModel")
var users = {};


users.count = function () {
    return new Promise(function (resolve, reject) {
        console.log("LLEGO");
        UserModel.find({}).count({}, function (err, n) {
            if (err)
                reject({
                    error: {
                        code: 500,
                        message: "Database error: " + err
                    }
                })
            resolve(n >0)
        });
    });
}

users.add = function (req) {
    return new Promise(function (resolve, reject) {

        var resValidation = validation.validate("users", "add", req.body)

        if (resValidation !== true) {
            reject(resValidation);
            return;
        }


        var user = new UserModel();

        for (var i in req.body) {
            user[i] = req.body[i];
        }


        // save the bear and check for errors
        user.save(function (err) {

            if (err)
                reject({
                    error: {
                        code: 500,
                        message: "Database error: " + err
                    }
                })


            resolve(true)

        });
    });
}

module.exports = users;