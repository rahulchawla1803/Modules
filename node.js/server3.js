//web server using connect

var connect=require('connect');
var http=require('http');

var app=connect();

/* 
doFirst is called first and then doSecond. The order is determined how app.use is specified.

next() is used to call the next member in the list. List basically is the order sepecified by app.use.
Thus in the list doFirst is first and doSecond is second.

WHY?
In earlier ways, only one function was been called at every request that was "onRequest".

Using Connect you can call one function after the another.

 */

function doFirst(request,response,next){
	console.log('doFirst is called');
	//you can implement something using request and response also.
	next();
}
function doSecond(request,response,next){
	console.log('doSecond is called');
	
}
app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8888);
console.log('Server is running');