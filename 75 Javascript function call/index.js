// function invocation.
class myFunction {
  constructor(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
  }
}
// function myFunction(arg1, arg2){
//     firstName = arg1;
//     lastName = arg2;
// }
// ! function invocation.
// incase of normal function
// myFunction();
// incase of constructor function
const called = new myFunction("shakil", "hossain");
console.log(called);
// incase of function inside an object
// myObject.myFunction();
// here this.firstName refers to a.firstName.
const a = {
  firstName: "Shakil",
  sleep: function () {
    console.log(`${this.firstName} is sleeping`);
  },
};
a.sleep();
// We can assume that a function doesn't require the keyword "window" since it's a hidden object.hea
//! A function can be considered as a type of method.
/* window{
    function eating(){
        console.log(`shakil is eating`)
    }
}

window.eating() */

/* //! The JavaScript call() Method
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.

This example calls the fullName method of person, using it on person1: */

const person = {
  fullName: function () {
    // return console.log(`${this.firstName + " " + this.lastName}`);
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
console.log(person.fullName.call(person1));
// This will return "Mary Doe"
console.log(person.fullName.call(person2));
/* //! The call() Method with Arguments
The call() method can accept arguments: */
const person5 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person6 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person5.fullName.call(person6, "Dhaka", "Bangladesh"));
