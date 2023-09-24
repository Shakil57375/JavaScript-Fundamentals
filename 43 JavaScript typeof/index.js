typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
typeof null; // Returns "object"

/* 
The constructor Property
The constructor property returns the constructor function for all JavaScript variables.
*/
// console.log("John".constructor); // Returns function String()  {[native code]}
// (3.14).constructor                // Returns function Number()  {[native code]}
// false.constructor                 // Returns function Boolean() {[native code]}
// [1,2,3,4].constructor             // Returns function Array()   {[native code]}
// {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
// new Date().constructor            // Returns function Date()    {[native code]}
// function () {}.constructor        // Returns function Function(){[native code]}
// check the parameter is an array or not
/* function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

const myArray = [3, 5, 3, 1, 5 ]
console.log(isArray(myArray)) */
// isArray(myArray)

// another way

function isArray(myArray) {
  return myArray.constructor === Array;
}

const myArray = [3, 5, 3, 1, 5];
console.log(isArray(myArray));

// check

function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

// another way to check date

function isDate(myDate) {
  return myDate.constructor === Date;
}

const date = new Date();
console.log(isDate(date));

/* let car; // Value is undefined, type is undefined
car = undefined; // Value is undefined, type is undefined
console.log(car); */

let car = ""; // The value is "", the typeof is "string"
