 // object literal synatx;

const person = {
    name : "john",
    age : 30,
    city : "bhopal",
};

// to know the data type of person Object.

console.log(typeof person);

// get the value inside the literal.....


console.log(person.name);
console.log(person.age);
console.log(person.city);


// Array-->

const numbers = [10,20,30,40];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);


// functions--->
// function is a way to group code together , you can run it anytime any anywhere;
 
// parameters-- parametrs are when you declaring the function.

// argumets - while calling  a function.


function sayHello()
{
    console.log("hello everyone");
    alert("Hello");
    document.write("hello");
}
 
// function calling--> (or)-- invokeing the function;
sayHello();


// addtion of numbers-->


// parameters;


// regular function-->

function add (num1, num2)
{
    return num1+num2;
}

// arguments-->
console.log(add (10,20));
console.log(add (50,90));

document.getElementById("demo").innerHTML = add(650,350);

// quetion of function-->

let number = 23;

function cube()
{
    return number * number * number;
};

console.log(cube());


// functiuon expresion;

const multiply = function(x,y)
{
return x * y;
};
console.log(multiply(5,8));


// arrow function


const divide = (a,b)=>
{
    return a/b;
}
console.log(divide(10,2));