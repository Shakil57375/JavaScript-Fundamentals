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

let marks = 30;

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);