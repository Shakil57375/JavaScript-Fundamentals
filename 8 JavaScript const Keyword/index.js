// allowed for let
// let a; //declare
// a = 5; //assign/initialization
// a= 7; //reassign

// not allowed for const
// we can't reassign the value of const
// const a = 5; //assign
// a= 7; //reassign
// console.log(a);

// allowed for let
// let a; //declare
// a = 5; //assign/initialization

// not allowed for const
// const a; //declare
// a = 5; //assign/initialization

// JavaScript dataTypes
/* 
dataTypes = {
    Numbers = 1,2,3, 100, 3.14
    Strings = 'Hello, World' "helloworld@gmail.com
    Boolean = true / false
    Null = 'Explicitly set a variable with no Value'
    Undefined = 'For variable that have not yet been defined'
    Object = 'Complex data structures - Arrays, Dates, Literals etc'
    Symbol = 'Used with objects' // usually not needed
}
 */

const fruits = ["apple", "bandana", "mango"];
(fruits[0] = "orange"), fruits.push("papaya");

// not allowed
// fruits = ["lichi", "Jackfruit"] //TypeError: Assignment to constant variable.
console.log(fruits);

/* 
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
*/

/* 
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/
