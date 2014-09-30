
/******************************************
 *
 *  Modules & Router
 *
 ******************************************/


var express = require('express');
var router = express.Router();
var users = require("./../controllers/users");


/******************************************
 *
 *  Api Calls
 *
 ******************************************/

router.route("/")
    .post(function (req, res) {

        users.add(req).then(function(message)
        {
            res.send(201, message)
        })
        .catch(function(result)
        {
            res.send(result.error.code, result.error.message)
        })


    })
    .get(function (req, res) {

        res.send(404, "You must send a valid action")
    });


router.route('/:id')


    .put(function (req, res) {

        res.send(404, "You must send a valid action")
    })
    .delete(function (req, res) {

        res.send(404, "You must send a valid action")
    });


router.route("/login")
    .post(function (req, res) {
        users.login(req).then(function(message)
        {
            res.send(200, message)
        })
        .catch(function(result)
        {
            res.send(result.error.code, result.error.message)
        })
    });


module.exports = router;