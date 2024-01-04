// Using var:
var x = 10; // Declaring a variable with var
console.log(x); // Output: 10
{
  var x = 5; // Variable x is accessible within the block and also outside
  console.log(x); // Output: 5
}
console.log(x); // Output: 5 (value of x is modified within the block)

// Using let:
let y = 10; // Declaring a variable with let
console.log(y); // Output: 10
{
  let y = 5; // Variable y is only accessible within the block
  console.log(y); // Output: 5
}
console.log(y); // Output: 10 (value of outer y is not affected by the block)

// Using const:
const z = 10; // Declaring a constant variable with const
console.log(z); // Output: 10
{
  const z = 5; // Constant variable z is only accessible within the block
  console.log(z); // Output: 5
}
console.log(z); // Output: 10 (const variable cannot be reassigned)

// Comments:
/*
- var has a function scope and is hoisted to the top of its scope.
- let has a block scope and is not hoisted to the top of its scope.
- const also has a block scope but cannot be reassigned after declaration.
- Use let when you need to reassign the variable.
- Use const when the variable should not be reassigned.
- Avoid using var in modern JavaScript, as let and const provide better scoping and behavior.
*/


// Using var
function exampleVar() {
    if (true) {
      var varVariable = "I am a var!";
      console.log(varVariable); // Output: I am a var!
    }
    console.log(varVariable); // Output: I am a var!
  }
  
  exampleVar();
  
  // Using let
  function exampleLet() {
    if (true) {
      let letVariable = "I am a let!";
      console.log(letVariable); // Output: I am a let!
    }
    // console.log(letVariable); // This line would cause an error as letVariable is not accessible here
  }
  
  exampleLet();
  
  // Using const
  function exampleConst() {
    const constVariable = "I am a const!";
    console.log(constVariable); // Output: I am a const!
  
    // constVariable = "Trying to reassign"; // This line would cause an error as constVariable cannot be reassigned
  }
  
  exampleConst();
  

  // Using var
function exampleVar() {
    if (true) {
      var varVariable = "I am a var!";
      console.log(varVariable); // Output: I am a var!
    }
    console.log(varVariable); // Output: I am a var!
  }
  
  exampleVar();
  
  // Using let
  function exampleLet() {
    if (true) {
      let letVariable = "I am a let!";
      console.log(letVariable); // Output: I am a let!
    }
    // console.log(letVariable); // This line would cause an error as letVariable is not accessible here
  }
  
  exampleLet();
  
  // Using const
  function exampleConst() {
    const constVariable = "I am a const!";
    console.log(constVariable); // Output: I am a const!
  
    // constVariable = "Trying to reassign"; // This line would cause an error as constVariable cannot be reassigned
  }
  
  exampleConst();
  