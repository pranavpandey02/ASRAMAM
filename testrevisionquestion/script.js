//question1 WAP to change the background color of body with click on buttons {3 buttons green, black, orange} 
// let h1 = document.getElementById("demo");

// function red()
// {
//     h1.style.color="red";
//     h1.style.backgroundColor ="black";
// }

// function blue()
// {
//     h1.style.color = "blue"
//     h1.style.backgroundColor="lightblue"
// }
//  

// question 2->Write a JavaScript function to capitalize the first letter of a string.
// function capitalizeEachWord(str) {
//     return str
//       .split(" ") // Split the string into an array of words
//       .map(word => capitalizeFirstLetter(word)) // Capitalize each word
//       .join(" "); // Join the words back into a string
//   }
  
//   function capitalizeFirstLetter(str) {
//     if (!str) return "";
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   // Example usage
//   const input = "cybrom technology bhopal";
//   const result = capitalizeEachWord(input);
//   console.log(result); // Output: "Cybrom Technology Bhopal"


// question3-> Write a java script program to find area of rectangle when width and height are given.

// function areaOfRectangle(h,w)
// {
//     return h*w;
// }
// console.log(areaOfRectangle(5,6));

// function isBlank(str) {
//     // Check if the string is null, undefined, or only contains whitespace
//     return typeof str === "string" && str.trim().length === 0;
//   }
  
//   // Example usage
//   console.log(isBlank(""));           // Output: true (empty string)
//   console.log(isBlank("   "));        // Output: true (spaces only)
//   console.log(isBlank("hello"));      // Output: false (non-blank string)
//   console.log(isBlank(null));         // Output: false (not a string)
//   console.log(isBlank(undefined));    // Output: false (not a string)
//   console.log(isBlank(123));          // Output: false (not a string)
  
// 2nd method->

// function secondString(str)
// {
//     return typeof str === "string";
// }
// console.log(secondString(""));


// 1)Write a Java Script Program to create 8-character random password generator.

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwordLength = 8;
    let password = "";
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  // Example usage
  const randomPassword = generatePassword();
  console.log("Generated Password:", randomPassword);
  