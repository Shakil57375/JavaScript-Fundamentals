// Copying Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Combining Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Adding Elements to an Array
const newArray = [...originalArray, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// Copying Objects (Shallow Copy)
const originalObject = { key1: 'value1', key2: 'value2' };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { key1: 'value1', key2: 'value2' }

// Function Arguments
function exampleFunction(a, b, c) {
  console.log(a, b, c);
}

const values = [1, 2, 3];
exampleFunction(...values); // Output: 1 2 3

// Object Properties (Introduced in ECMAScript 2018)
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2); // Output: { x: 1, y: 2, z: 3 }

// Rest Parameters (Opposite of Spread)
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
