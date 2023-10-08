/* // Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount; */
/* Initialize Variables
It is a good coding practice to initialize variables when you declare them.

This will:

Give cleaner code
Provide a single place to initialize variables
Avoid undefined values */
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};

/* Declare Objects with const
Declaring objects with const will prevent any accidental change of type: */

// Example
/* let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible */