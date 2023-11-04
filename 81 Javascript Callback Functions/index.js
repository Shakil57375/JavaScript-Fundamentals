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
// Todo:related function myDisplayer(some) {
//   console.log(some);
// }

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  if (myCallback) {
    return myCallback(sum);
  } else {
    return sum;
  }
}

// Todo:related const result = myCalculator(5, 5, myDisplayer);
// console.log(result);
// ! You can pass a complete function as an argument to another function. This is also known as passing a function as a parameter.
const result = myCalculator(2, 4, function (some) {
  console.log(some);
});
