var heading = document.getElementById("my1");

// heading.innerHTML="heelow ji kya haal chal";

var pname =prompt("please enter your name ");
var age = prompt("what is your age");
var userColor = prompt("which color you want");
var bgColor = prompt("Enter your background");
var displayPro = prompt("show display properties");

heading.innerHTML = pname + " "+ age;
heading.style.color=("red");
heading.style.backgroundColor=("black");
heading.style.display="inline";