/* 
JavaScript Random Integers
Math.random() used with Math.floor() can be used to return random integers.
 */

// Returns a random integer from 0 to 9:
const random = Math.floor(Math.random() * 10);
// console.log(random)
// Returns a random integer from 0 to 9:
const random1 = Math.floor(Math.random() * 99 ) + 1;
// console.log(random1)

/* A Proper Random Function
As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

This JavaScript function always returns a random number between min (included) and max (excluded):

Example */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndInteger(32, 54))

// This JavaScript function always returns a random number between min and max (both included):

// Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(33, 78))