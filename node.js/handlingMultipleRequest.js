/*
To run this file in command prompt, point the cmd to D:\node.js
Then >> node handlingMultipleRequest.js

node is working here as we have included it's path in advanced system settings
*/



function query(queryNum)
{
    console.log('The query placed: '+queryNum);

//execute is called here
    execute(function(){
        console.log(queryNum+": query is executed");
    })
}

//execute is defined here
function execute(funcAsArg){
    setTimeout(funcAsArg,5000);
//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

}

//queryNum is a variable(integer) passed as argument to function query
//funcAsArg is a variable(function) which is made equal to the function passed as an argument to execute

/*
Thus, firstly a query is called with its respected number as an argument i.e query(1), it takes 5 second for it to execute,
thus it is put on hold and next instruction i.e "query(2)" is called and so on.  
Afterwards, when 5 seconds are over, execute function is called respectively for different queries and there execution takes place.
*/

query(1);
query(2);
query(3);
query(4);
