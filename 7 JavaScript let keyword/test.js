let y = 5;
if (true) {
  let x = 6;
  console.log(x);
}

console.log(x); // x is not accessible here
console.log(y); // y is accessible here.

/* var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2 */

/* 
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
 */

/* 
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
*/
/* 
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
 */
