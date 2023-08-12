/* 
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:
 */

//This is ok
// javascript behavior with var
// javaScript sets by default
// var carName 
// carName = undefined

carName = "Volvo";
var carName;

/* Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError: */
// javascript behavior with var
// javaScript sets by default
// let carName
// not ok
carName = "Saab";
let carName = "Volvo";


/* 
In summary, when declaring a variable using var, the declaration is hoisted to the top and the variable is initialized with a value of undefined. However, with let, the variable declaration is also hoisted to the top and behaves as a global variable, but it does not assign any value. Therefore, if we try to access a variable before declaring it, we will receive a reference error.
let x; //declaration
x = 5; //initialization
the same thing goes for var and const
 */