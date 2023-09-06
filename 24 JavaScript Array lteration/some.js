/* 
JavaScript Array some()
The some() method checks if some array values pass a test.
*/

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    return value > 100;
}
let allOver1 = numbers.some(myFunction);
console.log(allOver1)