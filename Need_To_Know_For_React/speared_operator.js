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
const originalObject = { key1: "value1", key2: "value2" };
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

/* Spread Operator With Arrays
The spread operator is a tool that lets you spread out all the elements of an array or object. This can be used to create new objects or arrays that are clones, but for our specific use case we can combine this with destructuring to get all other elements not specifically destructured already. */

const array = ["A", "B", "C", "D", "E"];
const [first, second, ...rest] = array;

console.log(first);
// A
console.log(second);
// B
console.log(rest);
// ['C', 'D', 'E']
const elements = [3,4,5, 6,]
// const elements = document.querySelector("div");
const array3 = [...elements];

array3.map((a) => {
  /* This works */
});
elements.map((e) => {
  /* This throws an error */
});

// ! Destructuring Function Returns
/* If you have ever worked with React you are very familiar with this one. Destructuring arrays can be used when you want to return multiple values from a function as an array and easily access them.
 */
function sumAndMultiply(a, b) {
  return [a + b, a * b, a/b]
}

const [sum2, multiplication, division = "there is no division value"] = sumAndMultiply(2, 3)

console.log(sum2)
// 5
console.log(multiplication)
// 6
console.log(division)