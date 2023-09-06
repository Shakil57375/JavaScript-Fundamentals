/*
JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.
Note that the function takes 3 arguments:
The item value
The item index
The array itself
 */
const numbers = [45, 9, 4, 15, 25];
function myFunction(value, index, array) {
  console.log(value * 2);
  console.log(index);
//   console.log(array);
//   console.log("-------");
}
numbers.forEach(myFunction);
console.log(numbers)
