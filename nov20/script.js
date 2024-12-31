function add()
{
let num1 = parseInt(document.getElementById("input1").value);
let num2 = parseInt(document.getElementById("input2").value);
var result = num1+num2;
document.getElementById("demo").innerHTML=result;
}

function sub()
{
let num1 = parseInt(document.getElementById("input1").value);
let num2 = parseInt(document.getElementById("input2").value);
var result = num1-num2;
document.getElementById("demo").innerHTML=result;
}

function mul()
{
let num1 = parseInt(document.getElementById("input1").value);
let num2 = parseInt(document.getElementById("input2").value);
var result = num1*num2;
document.getElementById("demo").innerHTML=result;
}

function div()
{
let num1 = parseInt(document.getElementById("input1").value);
let num2 = parseInt(document.getElementById("input2").value);
var result = num1/num2;
document.getElementById("demo").innerHTML=result;
}



function dis()
{
  let display = document.getElementById("mynew").value;
  document.getElementById("demo").innerHTML=display;
}