var express = require('express');
var router = express.Router();
var vd=require('../videodata.json')
//observe there are two dots

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/hockey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    videodata:vd

  });
});

router.get('/mongoRead', function(req, res) {

   // console.log(db);
    var mycollection1 = db.get('players');
    mycollection1.find({},{limit:6},function(e,docs){
        console.log(e);
/*
        for(i=0;i<docs.length;i++)
        {
        console.log('value of i='+i);
        console.log(docs[i]);
        }
*/
        res.render('mongoRead', {
            users : docs
        });
    });
});

router.get('/mongoInsert', function(req,res){
    res.render('mongoInsert');
});

router.post('/insert', function(req,res){

    var name=req.body.name;
    var id=parseInt(req.body.id);
    var mycollection2 = db.get('players');
    mycollection2.insert({"name":name, "id":id}, function(e, docs){
        if(e){
            res.send("There was a error:"+e);
        }
        else {
            res.send("Successfully inserted in DB");
        }
    });
});


module.exports = router;
