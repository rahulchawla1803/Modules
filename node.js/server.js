
var http = require('http');

function onRequest(request, response)
{
console.log("A user made a request"+request.url);
response.writeHead(200, {"Content-Type": "Text/Plain"});
response.write("Here is some data");
response.end();

}

http.createServer(onRequest).listen(8888);
//createServer takes only one argument, i.e. a function that is called when some user request the server by requesting to the application/website.
console.log("Server is now running");

//Server is listening the user at the port 8888
//when you type the site localhost:8888, a request is being send by the user, thus onRequest function is called.