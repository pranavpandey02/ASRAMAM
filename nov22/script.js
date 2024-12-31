// query seletor

let h1 = document.querySelectorAll("h1");
console.log(h1);


h1[0].innerHTML = "hello from queary selector";
h1[0].style.color = "red";
h1[0].style.backgroundColor= "pink";


h1[1].innerHTML = "its a query selector now";



var button = document.getElementById("btn");

// whenever you pass a function as an argument to another function we never use () parentises.
//  you can call regular function before declaterion but not arrow function and function expresion.

button.addEventListener("click",display);


button.addEventListener("mouseover",function ()
{
    console.log("its a mouserover listner events");
}
)

// regular function


function display()
{
    alert("kya ji kya hal chjal");
}
