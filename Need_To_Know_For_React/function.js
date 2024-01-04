// Function declaration
function add(a, b) {
  return a + b;
}

// Using the function
const sum = add(3, 4);
console.log(sum); // Output: 7

// Function expression
const subtract = function (a, b) {
  return a - b;
};

// Using the function
const result = subtract(8, 5);
console.log(result); // Output: 3

// Arrow function
const multiply = (a, b) => a * b;

// Using the function
const product = multiply(2, 6);
console.log(product); // Output: 12
/* document.getElementById("myButton").addEventListener("click", function () {
    alert("Button clicked!");
}); */

const hlw = () =>{
    console.log("print hlw")
}

// ! another way to handle it.

/* document.getElementById("myButton").addEventListener("click", hlw); */

document.getElementById('myButton').addEventListener('click', function(event) {
    alert('Button clicked! X: ' + event.clientX + ', Y: ' + event.clientY);
  });
