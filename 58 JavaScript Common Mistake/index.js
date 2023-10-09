/* Accidentally Using the Assignment Operator
JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment operator (=), instead of a comparison operator (==) in an if statement.

This if statement returns false (as expected) because x is not equal to 10: */

let x = 0;
if (x == 10) {
}

// This if statement returns true (maybe not as expected), because 10 is true:

let y = 0;
if ((y = 10)) {
}

/* 1.//! Not Returning From a Function
If you’ve ever called a function and gotten a response of undefined, you’ve probably already seen this mistake. Functions in JavaScript return a value of undefined by default, which means if you don’t explicitly return anything with the return keyword, undefined will be the result.

So instead of this. */

/* const getAddedValue = (a, b) => {
  a + b;
}; */
// Make sure you actually return the result.

const getAddedValue = (a, b) => {
  return a + b;
};
