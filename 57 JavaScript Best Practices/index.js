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

/* Declare Arrays with const
Declaring arrays with const will prevent any accidential change of type:

Example */
/* let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number

const cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Not possible */

/* Don't Use new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object */