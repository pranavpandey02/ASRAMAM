// 1. write a function that takes 3 parameters and perform arithmetic operations on that.

// function sum(num1 , num2 ,num3)
// {
//    return num1+num2+num3;
// }
// console.log(sum(20,30,90));

// 2 . take 2 variables of your name and age and display it using the function in innerhtml and console

var head = document.getElementById("demo");

function sayhello()
{
var name ="Pranav Pandey";
var age = 22;

head.innerHTML=(name + " "+ age);

}
sayhello();

