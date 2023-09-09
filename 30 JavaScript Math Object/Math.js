// console.log(Math.PI)// 3.141592653589793
/* 
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
 */
/* 
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
 */
// console.log(Math.round(4.4))//4
// console.log(Math.round(4.5))//5
/* 
Math.ceil(4.9);//5
Math.ceil(4.7);//5
Math.ceil(4.4);//5
Math.ceil(4.2);//5
Math.ceil(-4.2);//4
 */

/* 
Math.floor(4.9);//4
Math.floor(4.7);//4
Math.floor(4.4);//4
Math.floor(4.2);//4
Math.floor(-4.2);//5
*/

/* 
Math.trunc()
Math.trunc(x) returns the integer part of x:

Example
Math.trunc(4.9); // 4 // will remove the number after decimal
Math.trunc(4.7); // 4 // will remove the number after decimal
Math.trunc(4.4); // 4 // will remove the number after decimal
Math.trunc(4.2); // 4 // will remove the number after decimal
Math.trunc(-4.2); // 4
*/

/* 
Math.sign()
Math.sign(x) returns if x is negative, null or positive:

Example
Math.sign(-4);//-1
Math.sign(0);//0
Math.sign(4);//1
 */
// console.log(Math.pow(9,2))//81
// console.log(Math.sqrt(81))//9
// console.log(Math.abs(-81))//81
// const max = Math.max(0, 150, 30, 20, -8, -200); //150
// const min = Math.min(0, 150, 30, 20, -8, -200); //-200
console.log(Math.random()) // returns 0 - 1 random number 