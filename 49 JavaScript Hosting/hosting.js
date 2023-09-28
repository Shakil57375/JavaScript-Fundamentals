/* // this will work and print 5 on the output.
x = 5; // assign
console.log(x)
var x;// declare 
// this will not work and will print a reference error as a output
y = 10;
console.log(y)
let y; */

var x = 5; // Initialize x
var y;     // Declare y

console.log(x, y)     // 5 undefined    // Display x and y

y = 7;    // Assign 7 to y

/* Declare Your Variables At the Top !
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

If a developer doesn't understand hoisting, programs may contain bugs (errors).

To avoid bugs, always declare all variables at the beginning of every scope.

Since this is how JavaScript interprets the code, it is always a good rule.

JavaScript in strict mode does not allow variables to be used if they are not declared.
Study "use strict" in the next chapter. */
