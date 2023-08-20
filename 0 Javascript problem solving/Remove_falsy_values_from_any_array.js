// Remove falsy values from any array
let array = ["apples", "banana", false, NaN, 0, undefined, null, ""]
let fruits = array.filter(Boolean)
console.log(fruits);