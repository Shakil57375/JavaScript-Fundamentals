// A closure gives you access to an outer function’s scope from an inner function
//example
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

//my words: what this code do is basically a nested function that will return
//its inner function (un-activated). So var add5 in line 7 activated the outer
//function with 5 as parameter which makes add5 is now the nameless function at
//line 2 that will return 5 + y;

//MDN words:
//add5 and add10 are both closures. They share the same function body
//definition, but store different lexical environments. In add5's lexical
//environment, x is 5, while in the lexical environment for add10, x is 10.

// ! A closure is a function having access to the parent scope, even after the parent function has closed.

function temporary(){
    let counter = 0;
    return function(){
        counter += 1;
    }
};

const add = temporary()

console.dir(add)
add() // 1
console.dir(add)
add() // 2
console.dir(add)
add() // 3
