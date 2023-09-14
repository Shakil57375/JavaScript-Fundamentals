// Javascript Comparison Operators
let x = 6; // value = 6 and datatype = number
let y = "6" // value = 6 and datatype = string
console.log(x == y) // true ==(checks the value only)
console.log(x === y) // false ===(checks the value and datatype as well)
const num1 = 450;
const num2 = 350;
const num3 = 1000;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is bigger then num2 and num3");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is bigger num1 and num3");
} else {
    console.log("num3 is bigger then num1 and num2");
}