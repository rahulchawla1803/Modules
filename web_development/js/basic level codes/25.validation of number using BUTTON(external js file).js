function function_check()
{
var num,text;
num=document.getElementById("numb").value;
if(num>=1&&num<=10)
{
text="Number valid";
}
else
{
text="Number Invalid";
}
document.getElementById("demo").innerHTML=text;
}
