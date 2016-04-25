/*
to run it in webStorm, change the Edit Configuration of server2.js 
to run it in cmd, point cmd to D:/node.js and then node server2.js
*/
var http = require('http');
var fs = require('fs');

//in case user entered a wrong url
function pageNotFound(request,response)
{
console.log("A user made a request"+request.url);
response.writeHead(404, {"Content-Type":"text/plain"});
response.write("404: page not found");
response.end();

}

///to handle request from user
function onRequest(request, response)
{
	if(request.method=='GET' && request.url=='/')   //if the user entered localhost:8888/
		{
			console.log("A user made a request"+request.url);
			response.writeHead(200, {"Content-Type":"text/html"});
			fs.createReadStream('./index2.html').pipe(response);
		}
	else
		{
			pageNotFound(request,response); // if url doesn't match
		}

}

http.createServer(onRequest).listen(8888);
console.log("Server is running");