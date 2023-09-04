function outerFunction() {
  let outerVar = "I am from the outer function";

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // This will log 'I am from the outer function'

