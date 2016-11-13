
function query(queryNum)
{
    console.log('The query placed: '+queryNum);

    setTimeout(execute,5000,queryNum);
    //queryNum is param1
}
function execute(queryNum){
    console.log(queryNum+": query is executed");
}


query(1);
query(2);
query(3);
query(4);

//Syntax for setTimeout 
//setTimeout(function,milliseconds,param1,param2,...)
