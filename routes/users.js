
/******************************************
 *
 *  Modules & Router
 *
 ******************************************/
var users = {};

var express = require('express');
var router = express.Router();

/******************************************
 *
 *  Api Calls
 *
 ******************************************/

router.route('/{id}')

    .post(function (req, res) {

        console.log("Mi id es " )
        res.send(404, "You must send a valid action")
        return;
    });


module.exports = users;