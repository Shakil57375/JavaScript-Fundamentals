/* 
JavaScript Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().
The reduce() method does not reduce the original array.
 */
/* 
Note that the function takes 4 arguments:
The total (the initial value / previously returned value)
The item value
The item index
The array itself
 */

const numbers = [45, 4, 9, 16, 25];

/* function myFunction(total, value, index, array) {
    console.log(total)
    console.log("------")
    return total + value;
}
let sum = numbers.reduce(myFunction);
console.log(sum) */
const sum = numbers.reduce((previousValue, currentValue, currentIndex, array) =>{
    return previousValue + currentValue 
}, 1) // this is the by default previous value.

console.log(sum)