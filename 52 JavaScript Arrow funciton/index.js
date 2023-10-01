// Normal Function in JavaScript
function Welcome() {
  console.log("Normal function");
}

// Arrow Function
const Welcome = () => {
  console.log("Normal function");
};

// Traditional Function Expression
var add = function (a, b) {
  return a + b;
};

// Arrow Function Expression
var arrowAdd = (a, b) => a + b;

// Arrow Function With Parameters:
hello = (val) => "Hello " + val;
// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:
hello = val => "Hello " + val;