//Method 1

function printGodfather()
{
	console.log("The godfather is the best movie Ever");
}

function printDPS()
{
	console.log("Dead poet society is an excellent movie");
}

module.exports.god=printGodfather;


//module.exports specify which are the elements that are needed to be exported.
//god will be used to refer printGodfather in the .js file in which movie.js is imported.





//Method 2
/*

module.exports = {
	



function printGodfather()
{
	console.log("The godfather is the best movie Ever");
},


function printDPS()
{
	console.log("Dead poet society is an excellent movie");
},


imdbBest: "The Shawshank Redemption"  
//module is exported as an object	


};

//change god to printGod in app1.js for method 2


*/






 