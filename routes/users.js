
/******************************************
 *
 *  Modules & Router
 *
 ******************************************/


var express = require('express');
var router = express.Router();
var users = require("./../controllers/users");
var Promise = require("bluebird");

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
            console.log(result);
            res.send(result.error.code, result.error.message)
        })


    })
    .get(function (req, res) {

        console.log("Mi id es " + req.params.id)
        res.send(404, "You must send a valid action")
    });


router.route('/:id')


    .put(function (req, res) {

        console.log("Mi id es " + req.params.id)
        res.send(404, "You must send a valid action")
    })
    .delete(function (req, res) {

        console.log("Mi id es " + req.params.id)
        res.send(404, "You must send a valid action")
    });




module.exports = router;