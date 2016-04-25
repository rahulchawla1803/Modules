var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/hockey');

//localhost:3000/api/listUsers
router.get('/listUsers', function(req, res) {
    var players = db.get('players');
    players.find({},{limit:5},function(e,docs) {
        if (e) {
            res.send('The error is:' + e);
        }
        else {
            res.send(docs);
            //console.log(typeof(docs));
            res.end();
        }
    });

});



module.exports = router;
