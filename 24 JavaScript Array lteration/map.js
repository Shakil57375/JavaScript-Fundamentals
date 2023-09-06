/* 
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
 */
const numbers = [45, 9, 4, 15, 25];
function myFunction(value, index, array) {
    return value * 2
}
const mappedArray = numbers.map(myFunction);
console.log(numbers);
console.log(mappedArray)
