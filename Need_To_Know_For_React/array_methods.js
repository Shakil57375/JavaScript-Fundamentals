[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7

//ADD ELEMENTS
//PUSH - adds elements to the END OF ARRAY
const friends = ["Zizi", "Ioseb", "Maiko"];
const newLength = friends.push("Karina");
console.log(friends); //["Zizi", "Ioseb", "Maiko"]
console.log(newLength); //["Zizi", "Ioseb", "Maiko", "Karina"]

//UNSHIFT - add elements to BEGINNING OF THE ARRAY
friends.unshift("Baqso");
console.log(friends); //["Baqso", "Zizi", "Ioseb", "Maiko", "Karina"]

//REMOVE ELEMENTS
//POP - removes LAST ELEMENT FROM ARRAY
friends.pop(); //["Karina"]
//returns removed element
const popped = friends.pop();
console.log(popped); //["Karina"]
console.log(friends); //["Baqso", "Zizi", "Ioseb", "Maiko"]

//shift - Removes FIRST ELEMENT FROM THE ARRAY
friends.shift(); //["Baqso"]
console.log(friends); //["Zizi", "Ioseb", "Maiko"]

//indexOf - Tells the position of the element in the ARRAY
console.log(friends.indexOf("Zizi")); //0
//if we write the element which is not in the ARRAY we get : -1
console.log(friends.indexOf("zizi")); //-1, we need to write in CamelCase

//includes - modern method of indexOf
//includes - testing with STRICT EQUALITY
console.log(friends.includes("Zizi")); //true

// Array Methods

// push() - Adds elements to the end
let fruits = ['apple', 'orange'];
fruits.push('banana'); // fruits: ['apple', 'orange', 'banana']

// pop() - Removes the last element
let lastFruit = fruits.pop(); // lastFruit: 'banana', fruits: ['apple', 'orange']

// shift() - Removes the first element
let firstFruit = fruits.shift(); // firstFruit: 'apple', fruits: ['orange']

// unshift() - Adds elements to the beginning
fruits.unshift('kiwi'); // fruits: ['kiwi', 'orange']

// splice() - Adds or removes elements at a specific index
fruits.splice(1, 0, 'grape', 'banana'); // fruits: ['kiwi', 'grape', 'banana', 'orange']

// slice() - Returns a portion of the array
let slicedFruits = fruits.slice(1, 3); // slicedFruits: ['grape', 'banana'], fruits unchanged

// concat() - Joins two arrays
let moreFruits = ['apple', 'pear'];
let combinedFruits = fruits.concat(moreFruits); // combinedFruits: ['kiwi', 'grape', 'banana', 'orange', 'apple', 'pear']

// indexOf() and lastIndexOf() - Find index of an element
let index = fruits.indexOf('banana'); // index: 2

// Example initialization of the 'numbers' array
let numbers = [1, 2, 3, 4, 5];

// find() - Returns the first element satisfying a condition
let found = numbers.find((num) => {
    console.log(num)
    return num >= 3
}); // found: 3
console.log(found)

// filter() - Creates a new array with elements passing a condition
let result = numbers.filter(num => num > 2); // result: [3, 4, 5]

// forEach() - Executes a function for each element
fruits.forEach(fruit => console.log(fruit)); // logs 'kiwi', 'grape', 'banana', 'orange'

// map() - Creates a new array by applying a function to each element
let squared = numbers.map(num => num * num); // squared: [1, 4, 9, 16, 25]

// some() - Checks if at least one element satisfies a condition
let hasLargeNumber = numbers.some(num => num > 4); // hasLargeNumber: true

// every() - Checks if all elements satisfy a condition
let allLargeNumbers = numbers.every(num => num > 0); // allLargeNumbers: true

// array reducer
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// Summing up all elements in the array using reduce
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
