/* Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called. */
// we can call a function in two ways:
// 1: by using the window object
// * Invocation means to denote by whom the function is called
// ! not recommended
function withWindow(){
    console.log("I am the function with window object")
}
// ! not recommended
window.withWindow()
function withoutWindow(){
    console.log("I am the function without window object")
}
withoutWindow()
// In JavaScript, the thing called this, is the object that "owns" the current code.
// The value of this, when used in a function is the object that "owns" the function.
function a(){
    console.log(this)
}

a()

const x = {
    a : function (){
        console.log(this)
    }
}

x.a()


// This is a function constructor:
class myFunction {
    constructor(arg1, arg2) {
        this.firstName = arg1
        this.lastName = arg2
    }
}
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;