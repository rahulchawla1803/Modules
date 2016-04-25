/*Execute this file in command prompt to get all the values of collection "users" from db "bank"
>>cd D:/node.js
>> node serverTrial

*/
var MongoClient = require('mongodb').MongoClient;
var dbHost = 'mongodb://localhost:27017/bank';
var myCollection = "users";


MongoClient.connect(dbHost, function(err, db){

  if ( err ) throw err;

  db.collection(myCollection).find({},{},{}).toArray(

    function(err, docs){

      for(index in docs){

        console.log(docs[index]);

      }

    }
  );
});
