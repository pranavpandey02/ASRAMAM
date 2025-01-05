// Question1)- Declare 5 variable for name ,age ,city,course anmdcountry and display in console.

var name = "Pranav Pandey";
var age =21;
var city = "Rewa";
var Course = "Mearn stack";
var country = "India";
console.log(name + " "+age + " "+ city +" "+ Course + " "+country ); 

// Question2)- Declare 2 string variable and concat them into one variable and display in alert;
var college = "oriental institue of science and technology bhopal";
var courseIs = "B-tech (EX)";
 
window.alert(college+" "+courseIs);

// Question3)- Take username and age from user and display it in alert,console and innerHtml;
var userName = prompt("Enter your userName");
var userAge = prompt("Enter your age");
var userColor=prompt("please enter your color");
var userBgColor=prompt("please enter your background color");

var demo = document.getElementById("demo");
demo.innerHTML=(userName+ " "+userAge);
// userColor.style.color= (blue);
demo.style.color=userColor;
demo.style.backgroundColor=userBgColor;


