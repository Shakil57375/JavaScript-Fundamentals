let x = "John";
let y = new String("John")
// console.log(typeof y); // object
// console.log(typeof x); // string
// console.log(x == y); // true == operator does the type conversion of the operands before comparison.
// console.log(x === y); // false  === operator compares the values as well as the data types of the operands.

const s = "Bangladesh"
// console.log(s.length);
// string slice method 
let str = "Apple, Banana, Kiwi"
// let result = str.slice(7, 13)
let slice = str.slice(-12, -6)
// string substr method 
let substr = str.substr(7, 6)
// console.log(slice);
// console.log(substr);
// string replace method 

let love = "I love this world"
let hereAfter = love.replace("world" , "hereAfter") // [NOTE: replace method is case sensitive]
// console.log(love);
// console.log(hereAfter);

// converting to uppercase and lowercase
let name = "shakil"
let uppercase = name.toUpperCase()
// console.log(uppercase);
// string concat() Method

// [Stings cannot be changed, not replaced]

let firstName = "Shakil"
let lastName = "Hossain"
let fullName = firstName.concat(" ", lastName)
// console.log(fullName);

// String trim method()
// The trim() method removed whitespace from both sides of a strings
let trim  = "    Shakil Hossain      "
let res = trim.trim()
// console.log(res);

let text = "Hello World"
// console.log(text[466]); // undefined
// console.log(text.charAt(344)); // empty string
console.log(text.split(""));// ()how to split you can use (empty space comma and a full stop as well)