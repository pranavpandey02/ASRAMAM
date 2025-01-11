// string
let header = "template literls";
let tags = ["template Strings" , "javascript" , "es6"];
let text = `<h2>${header}</h2><ul>`;

for (let x of tags)
{
    text += `<li>${x}</li>`;
}
text+= `</ul>`;
document.getElementById("container").innerHTML = text;

// A function pass as an argument to another function is called as a call back function...
// (for each loops applied on array);
// for each method task a callback function as an argument

var numbers = [23,45,63,50,678];

numbers.forEach(calculate);
function calculate (y)
{
    console.log( y * 100 ); 
}

// Math method------>
let output = Math.PI;

output = Math.round(45.24586995545);
// maths.round to nearest whole numbers;
console.log(output);
output = Math.ceil(45.235);
// math.ceil round to nearest higher whole number;
console.log(output);

output = Math.floor(35.545454544);
// math.floor round to the nerest whole number;
console.log(output);

output = Math.trunc(2.9999);
console.log(output);