
/******************************************
 *
 *  Modules & Router
 *
 ******************************************/


var express = require('express');
var router = express.Router();

/******************************************
 *
 *  Api Calls
 *
 ******************************************/

router.route("/")
    .post(function (req, res) {

        console.log("Mi id es " + req.params.id)
        res.send(404, "You must send a valid action")
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