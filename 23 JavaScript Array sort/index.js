// Array sorting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits)// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.reverse();
// console.log(fruits)// [ 'Orange', 'Mango', 'Banana', 'Apple' ]

const points = [40, 100, 1, 5, 25, 10];
// smallest to longest
/* points.sort(function (a, b) {
  return a - b;
});
console.log(points); //[ 1, 5, 10, 25, 40, 100 ] */
// longest to smallest
/* points.sort(function (a, b) {  
  return b - a;
});
console.log(points); //[ 100, 40, 25, 10, 5, 1 ] */

// Array Random
// const points1 = [40, 100, 1, 5, 25, 10];
// points1.sort(function () {
//   return 0.5 - Math.random();
// });
// console.log(points1)

// Find the Highest (or Lowest) Array Value
/* There are no built-in functions for finding the max or min value in an array.
However, after you have sorted an array, you can use the index to obtain the highest and lowest values. */
// const points1 = [40, 100, 1, 5, 25, 10];
// points1.sort(function(a,b){
//     return a-b
// })
// // lowest number
// console.log(points1[0])
// // highest number
// console.log(points1[points1.length-1])
// Math.max method
const points1 = [40, 100, 1, 5, 25, 10];
console.log(Math.max(40, 100, 1, 5, 25, 10));
console.log(Math.max.apply(null, points1));
// Math.min method
console.log(Math.min(40, 100, 1, 5, 25, 10));
console.log(Math.min.apply(null, points1));
// My Min / Max JavaScript Methods
// The fastest solution is to use a "home made" method
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
// Sorting Object Arrays
const cars1 = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars1.sort(function(a,b){
    return a.year - b.year
})

console.log(cars1)

// Comparing string properties is a little more complex:
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(cars)
