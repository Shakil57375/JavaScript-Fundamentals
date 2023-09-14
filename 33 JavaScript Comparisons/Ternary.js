// Ternary Operator
// condition ? doThisIfTrue : doThisIfFalse
1 > 2 ? console.log(true) : console.log(false)
// returns false
/* let age = 15;
let canDrive = age >= 16 ? 'yes' : 'no';
// canDrive will be 'no'
// the condition will be age > 16 which is false so canDrive will equal exprIfFalse

// this ternary is the same as this if else statement
let age = 15;
let canDrive;
if (age >= 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}

// canDrive will be 'no' because 15 is less than 16 */

// ternary operator to check the eligibility to vote
// let age = 15;
// let result =
//     (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);

// program to check pass or fail

// let marks = 30;

// // check the condition
// let result = (marks >= 40) ? 'pass' : 'fail';

// console.log(`You ${result} the exam.`);

let price = 33;

price > 44 ? console.log("buy") : console.log("not buy")

// program to check if number is positive, negative or zero
// let a = 3;
// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(`The number is ${result}.`);

function printPoor() {
    console.log("Poor result")
    return "poor"
  }
  
  function printSuccess() {
    console.log("Nice result")
    return "success"
  }
  
  
  const pass = false;
  
  const result = pass ? printSuccess() : printPoor()
  // Poor result (console.log executed)
  
  console.log(result)
  // poor

const age = 12
  console.log(age >= 18 ? age < 30 ? "you are adult" : "you are old" : "you are young")