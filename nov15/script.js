//two string concatinate..

var heading = document.getElementById("demo");
// var name = "john Doe";
// var age = 24;

// // print in console
// console.log(name + " "+age); 

// // print in innerhtml;

// heading.innerHTML = (name + " "+ age);



// to get value from user
// get color name and background color;
// from user and apply on heading;

var userName = prompt("Enter your Name");
var useAge = prompt("Enter your Age");
var userColor = prompt("which color you want");
var bgColor = prompt("Enter your background");
var displayPro = prompt("show display properties");

heading.innerHTML = userName + " "+useAge;
heading.style.color =userColor;
heading.style.backgroundColor =bgColor;
// heading.style.display = displayPro;

// change attribute

var myimage = document.getElementById("myImg");
myimage.src = "second.jpg";


