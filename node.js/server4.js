//web server using connect

var connect=require('connect');
var http=require('http');
var fs=require('fs');

var app=connect();
/* 
Here app.use is different than that in server3.js...
app.use takes 2 arguments, FIRST is the relative address with respect to localhost:8888 and SECOND is the function to be called.

*/
function index(request, response)
{
	console.log("A user made a request"+request.url);
	response.writeHead(200, {"Content-Type":"text/html"});
	fs.createReadStream('./index2.html').pipe(response);

}
function profile(request,response){
	console.log('Profile is called');
}

function forum(request,response){
	console.log('Forum is called');
}
app.use('/profile', profile);
app.use('/forum', forum);
app.use('/', index);
//observe why the order of these 3 statements of app.use is like this. 
//If '/' is written before '/profile' then all the request will be directed to index function, even the /profile

http.createServer(app).listen(8888);
console.log('Server is running');