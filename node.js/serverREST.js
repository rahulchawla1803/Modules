var express = require('express');
var app = express();
var fs = require("fs");

//server to build REST api on the data "users.json"

//localhost:8081/listUsers will list the data in users.json
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
})

var data2;
//For the simplicity of the program user is defined here, else it could have been dynamically fetched from the front end forms.
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

//localhost:8081/addUser will add the user "user4" and then display all the users.
app.get('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];

        //NOTE: the added data is only being displayed on the browser and NO changes are made to users.json file. Thus, content of users.json is constant.
       //you can modify users.json using
        //fs.writeFileSync(__dirname + "/" + "users.json",JSON.stringify(data));
       res.end( JSON.stringify(data));

      
   });
})

var id = 2;

//localhost:8081/deleteUser will delete the user with id=2 and then display all the users.
app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
    
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})