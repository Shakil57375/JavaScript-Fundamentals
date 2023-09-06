
/* 
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
 */
const numbers = [45, 9, 4, 15, 25];
function myFunction(value, index, array) {
  console.log(value * 2); // 90, 18, 8, 30, 50
  console.log(index * 2); // 0, 2, 4, 6, 8
  //   console.log(array); //[45, 9, 4, 15, 25]
}
const mappedArray = numbers.map(myFunction);
console.log(numbers);
