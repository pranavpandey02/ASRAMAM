
function display()
{
    alert("button was clicked");
}

function display1(){
    alert ("button was hover");
}
var button = document.getElementById("btn");

button.addEventListener("mouseover",display1);
