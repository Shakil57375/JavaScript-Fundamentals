/* 
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
 */
/* {
  let x = 2;
} */
// x can NOT be used here
/* 
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.
*/

/* {
  var x = 2;
} */
// x CAN be used here
/* 
Local Scope
Variables declared within a JavaScript function, become LOCAL to the function.
 */

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

/* Local variables have Function Scope:

They can only be accessed from within the function. */
/* Function Scope
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function. */
function myFunction() {
  var carName = "Volvo"; // Function Scope
}
function myFunction() {
  let carName = "Volvo"; // Function Scope
}
function myFunction() {
  const carName = "Volvo"; // Function Scope
}
/* Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL. */
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

/* Global Scope
Variables declared Globally (outside any function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block. */
/* var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope */
/* JavaScript Variables
In JavaScript, objects and functions are also variables. */
const a = function(){
    
}

/* Automatically Global
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

This code example will declare a global variable carName, even if the value is assigned inside a function. */

// myFunction();

// code here can use carName
 
/* function myFunction() {
  carName = "Volvo";
}
 */
/* 
Global Variables in HTML
With JavaScript, the global scope is the JavaScript environment.

In HTML, the global scope is the window object.

Global variables defined with the var keyword belong to the window object:
*/
var car = "Volvo";
console.log(window.car)
// code here can use window.carName
document.getElementById("demo").innerHTML = "I can display " + window.car;