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
