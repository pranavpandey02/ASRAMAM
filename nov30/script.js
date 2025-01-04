var name ="Pranav";
var city = "bhopal";
var lastname = "Pandey";
var data = `this is out first string backtick`;

template literals or string literals
explained in ES6

var info = document.getElementById("demo").innerHTML =`this is  magic (${data} ${name} ${lastname})`;

var div = document.getElementById("trial");

div.innerHTML = "<h1>"+ name +"</h1>";

div.innerHTML = `<h1> ${data}</h1>`;


// question-- write a fucntion to display the name city of person using template literls and display it in innnerhtml 

var heading = document.getElementById("new");
heading.addEventListener("click")

function show()
{
heading.innerHTML = `${name} ${city}`;
}



