/* 
JavaScript Array every()
The every() method checks if all array values pass a test.

This example checks if all array values are larger than 18:
 */
/* 
Note that the function takes 3 arguments:

The item value
The item index
The array itself
 */

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    return value > 1;
}
let allOver1 = numbers.every(myFunction);
console.log(allOver1)