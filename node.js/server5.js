var express = require('express');
var app = express();



app.get('/index3.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index3.html" );
   //when localhost:8081/index3.html is entered ----> __dirname/index3.html is send 
})

/*instead of creating new file for every form action like what i did in my SMS project,
I can use this approach. 
As soon as processGet is triggered this function wil be called.

*/
app.get('/processGet', function (req, res) {

   // Prepare output in JSON format
   response = {
       firstName:req.query.firstName,
       lastName:req.query.lastName
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})