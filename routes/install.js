
/******************************************
 *
 *  Modules & Router
 *
 ******************************************/


var express = require('express');
var router = express.Router();
var usersController = require("./../controllers/users");


/******************************************
 *
 *  Api Calls
 *
 ******************************************/

router.route("/empty")

    .get(function (req, res) {

        usersController.count().then(function(c) {
            console.log(c);
            res.json({ isEmpty: c == 0 });
        }).catch(function(e)
        {
            res.json(e.errorCode, e.errorMessage);
        });
    });

module.exports = router;