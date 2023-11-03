// ! I will call you letter
// ? What is a callback function?
// * A callback function passed as an argument to another function.
// normal function
/* function myDisplayer(some) {
  console.log(some)
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result); */
// ! callback function.
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  if (myCallback) {
    return myCallback(sum);
  } else {
    return sum;
  }
}

const result = myCalculator(5, 5, myDisplayer);
console.log(result);
  