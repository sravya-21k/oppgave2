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
  if (number % 2 === 0) {
    return "odd";
  } else {
    return "even";
  }
}
console.log(myFunction(3));
//console.log(myFunction(10));
/******************************************************************************
  2.
  
  Make the following function:
  
  The function should take in a string as a parameter and return the string 
  in upper case with an exclamation mark at the end.
  
  Example: "This is cool" should return "THIS IS COOL!"
  
  ******************************************************************************/

const str = "This is cool";
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr + "!");

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
  if (hour < 0) {
    return "Invalid Time";
  } else if (hour >= 0 && hour <= 5) {
    return "Good night";
  } else if (hour > 5 && hour <= 11) {
    return "Good morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good day";
  } else if (hour >= 18 && hour <= 23) {
    return "Good evening";
  } else if (hour > 23) {
    return "Invalid Time";
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
const Myarray = ["Red", "Green", "Blue", "Yellow"];
console.log(Myarray.splice(1, 2));
const Numbers = ["One", "Two", "Three", "Four", "Five", "Six"];
console.log(Numbers.splice(1, 4));
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
//const String = "Javascript is hard";
//console.log(String.replace("hard", "fun"));
const Mystring = "  It's hard to use methods  ";

console.log(Mystring.trim());
const newStr = "     hard   ";
console.log(newStr.trim().replace("hard", "fun"));
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
console.log(heroes.slice(1));
console.log(heroes.toSpliced(3, 1, "Skull"));
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
    return "😎string 😎";
  } else if (typeof parameter === "number") {
    return `😎${(parameter * 2).toString()}😎`;
  } else if (parameter === true) {
    return "😎Yeah😎";
  } else if (parameter === false) {
    return "😎Chill😎";
  } else {
    return "😎Primitive values only😎";
  }
}
console.log(myFunction("hello"));
console.log(myFunction(6));
console.log(myFunction(true));
console.log(myFunction(false));
console.log(myFunction({}));
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
function updateArray(array, itemToCheck) {
  if (array.includes(itemToCheck)) {
    const index = array.indexOf(itemToCheck);

    array.splice(index, 1);
  } else {
    array.push(itemToCheck);
  }

  return array;
}
console.log(updateArray(["Red", "Green"], "Blue"));
console.log(updateArray(["Red", "Green", "Blue"], "Green"));
console.log(updateArray(["One", "Two", "Three"], "Four"));
console.log(updateArray(["One", "Two", "Three"], "Two"));
