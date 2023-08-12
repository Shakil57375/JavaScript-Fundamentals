let p = 12 + 4 + "volvo";
console.log(p);

let q = "volvo" + 12 + 4;
console.log(q);

let a = 5;
a = undefined;
a = "hello";
a = true;
console.log(a);

// let x = 5;
// let y = 5;
// let z = 6;
// (x == y) // Returns true
// (x == z); // Returns false

/* 
What is expression in JavaScript with example?
There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate. The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x . The expression itself evaluates to 7 
*/
// array
const myArray = ["Shakil", "student"]
// object
const myObject = {
    name : "Shakil", 
    age : 20,
    profession: "student"
}

console.log(typeof myObject);
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
// let car = "";    // The value is "", the typeof is "string"