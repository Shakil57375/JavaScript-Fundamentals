/* JavaScript Array filter()
The filter() method creates a new array with array elements that pass a test. */
/* 
Note that the function takes 3 arguments:
The item value
The item index
The array itself
 */
const numbers = [45, 9, 4, 15, 25];
function myFunction(value, index, array) {
    return value > 12
}
const newArray = numbers.filter(myFunction);
console.log(numbers); //[ 45, 9, 4, 15, 25 ]
console.log(newArray) //[ 45, 15, 25 ]

