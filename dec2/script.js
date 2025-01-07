var todaydate = new Date();
console.log(todaydate);

var today = todaydate.getDay();
console.log(today);

let day;

switch(today)
{
case 0:
    day = "sunday";
    break;
case 1:
    day= "Monday";
    break;
case 2:
    day ="Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day= "Thursday";
    break;
case 5:
    day = "friday";
    break;
case 6:
    day="saturday";
    break;

}
var show = document.getElementById("demo").innerHTML=`today is :${day}`;
console.log(`today is : ${day}`);


//============object==================

const person = {
    firstname :"Pranav",
    lastname : "Pandey",
    display : function()
    {
        return `this is ${this.firstname} ${this.lastname} is from display function`;
    },
}
console.log(person.firstname+ " " + person.lastname);
console.log(person.display());

const data1 = {
    name : "Pranav",
    city : "Pandey",
    age  :  21,
    show :  function()
    {
        return `my name is : ${this.name} and my age is :${this.age}`;
    },
}

var display = document.getElementById("demo2");
display.innerHTML = data1.name + " " + data1.city +  " "+ data1.age;

function give()
{
    display.innerHTML = data1.show();
}