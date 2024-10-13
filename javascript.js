/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
function myFunction(number) {
  // if (number % 2 === 0) {
  //   return "odd";
  // } else {
  //   return "even";
  // }
  return number % 2 === 0 ? "odd" : "even";
}
console.log(myFunction(4));
//console.log(myFunction(10));
/******************************************************************************
  2.
  
  Make the following function:
  
  The function should take in a string as a parameter and return the string 
  in upper case with an exclamation mark at the end.
  
  Example: "This is cool" should return "THIS IS COOL!"
  
  ******************************************************************************/
function myString(str) {
  const upperCaseStr = str.toUpperCase() + "!";
  return upperCaseStr;
}
console.log(myString("This is cool"));
/******************************************************************************
  3.
  
  Make the following function:
  
  The function should take in 2 parameters:
  
   - A name (string)
   - An hour of the day (number)
  
  The function should return:
  "Invalid time" if the hour received is less than 0
  "Good night (name received)" if the hour received is 0-5
  "Good morning (name received)" if the hour received is 6-11
  "Good day (name received)" if the hour received is 12-17
  "Good evening (name received)" if the hour received is 18-23
  "Invalid time" if the hour received is greater than 23
  
  If no hour is received, your function should return an error message.
  
  ******************************************************************************/

function greet(hour) {
  if (hour < 0 || hour > 23) {
    return "Invalid Time";
  } else if (hour >= 0 && hour <= 5) {
    return "Good night";
  } else if (hour > 5 && hour <= 11) {
    return "Good morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good day";
  } else if (hour >= 18 && hour <= 23) {
    return "Good evening";
  } else {
    return "error message";
  }
}
console.log(greet(14));
console.log(greet());
/******************************************************************************
  4.
  
  Make the following function:
  
  The function should take in an array as a parameter, and return the array 
  with the first and last index removed.
  
  Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]
  
  Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
  ["Two", "Three", "Four", "Five"]
  ******************************************************************************/
function myArray(parameter) {
  // Use slice to extract elements from index 1 to the second last element (-1)
  const result = parameter.slice(1, -1); // The slice(1, -1) means it starts at index 1 and stops just before the last element
  return result;
}

console.log(myArray(["Red", "Green", "Blue", "Yellow"]));
console.log(myArray(["One", "Two", "Three", "Four", "Five", "Six"]));
/******************************************************************************
  5.
  
  Make the following function:
  
  The function should take in a string as a parameter.
  
  Use string methods on the text parameter you receive to do the following:
   - Replace the word 'hard' with 'fun'
   - Remove the whitespace from the beginning and end of the string
   
  Then return the string.
  
  Example1: "  Javascript is hard   " should return "Javascript is fun"
  Example2: " It's hard to use methods " should return "It's hard to use methods"
  Example3: "   hard        " should return "fun"
  
  ******************************************************************************/
function myNewString(String) {
  //Remove the whitespace from the beginning and end of the string  and replaced
  const myString = String.trim().replace("hard", "fun");
  return myString;
}
myNewString("  Javascript is hard   ");
myNewString(" It's hard to use methods ");
myNewString("   hard        ");

/******************************************************************************
  6.
  
  Use array methods to do the following:
  
   - Remove the first hero of the array (Spider-Man)
   - Replace "Doctor Strange" with "Skrull"
   - Use the splice method to remove Thor and Hulk and add "Captain America"
   - Join the array to a string with "💪" between each hero
  
  ******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];
//Remove the first hero
console.log(heroes.splice());
//Remove Doctor strange with "skrull"
console.log(heroes.splice(2, 1, "Skrull"));
//removed Thor and Hulk and add "Captain America"
console.log(heroes.splice(0, 2, "Captain America"));
//string with "💪" between each hero
console.log(heroes.join("💪"));
/******************************************************************************
  7.
  
  EXTRA CHALLENGE
  
  This is not mandatory, only for those who want an extra challenge.
  
  Make the following function:
  
  The function should take in 1 parameter.
  
  If the parameter received is a string: 
  Return the string with "😎" added to the beginning and end
  
  If the parameter received is a number:
  Double it, convert it to a string and return it with "😎" added to the 
  beginning and end.
  
  If the parameter received is a boolean:
  If the parameter received is true, return "😎Yeah😎". If the parameter received
  is false, return "😎Chill😎"
  
  If the parameter received is any other datatype:
  Return "😎Primitive values only😎"
  
  ******************************************************************************/
function myFunction(parameter) {
  if (typeof parameter === "string") {
    return "${parameter} 😎";
  } else if (typeof parameter === "number") {
    return `😎${(parameter * 2).toString()}😎`;
  } else if (typeof parameter === "Boolean") {
    return parameter ? "😎Yeah😎" : "😎Yeah😎";
  } else {
    return "😎Primitive values only😎";
  }
}
console.log(myFunction("hello")); //Checked with string
console.log(myFunction(6)); //checked with number
//checked with boolean
console.log(myFunction(true));
console.log(myFunction(false));
console.log(myFunction({})); //checked with datatype
/******************************************************************************
  8.
  
  EXTRA CHALLENGE #2:
  ,
  This is not mandatory, only for those who want an extra challenge.
  
  Make the following function:
  
  The function should take in 2 parameters, 1 array and 1 string.
  
  Inside your function, check if the array received contains the string received.
  If it does, remove that element from the array and return it.
  
  If the array does not contain the string, add that string to the end of the 
  array and return it.
  
  Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
  Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
  Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
  Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
  ******************************************************************************/
//function with two parameters 1 array, 1 string
function myNewArray(array, string) {
  // Check if the array contains the string
  if (array.includes(string)) {
    //If the array contains the string, find its index and remove it
    const index = array.indexOf(string); //find the index of the string

    array.splice(index, 1); //Remove the string at that index
  } else {
    array.push(string); //if array does not contain the string added string to the end of the array
  }
  //Return the modified array
  return array;
}
console.log(myNewArray(["Red", "Green"], "Blue"));
console.log(myNewArray(["Red", "Green", "Blue"], "Green"));
console.log(myNewArray(["One", "Two", "Three"], "Four"));
console.log(myNewArray(["One", "Two", "Three"], "Two"));
