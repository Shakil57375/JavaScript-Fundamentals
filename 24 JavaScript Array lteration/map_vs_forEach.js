/* 
Differences between forEach() and map() methods:
The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.
 */
/* 
Differences between forEach() and map() methods:
The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.
 */
/* 
The main difference between forEach loop and map in JavaScript is that forEach is used to iterate and perform operations on each element of an array, while map is used to transform each element of an array into a new value and return a new array.

Example:
const numbers = [1, 2, 3, 4];

// forEach
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2 4 6 8

// map
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers);
// Output: [2, 4, 6, 8]
 */
