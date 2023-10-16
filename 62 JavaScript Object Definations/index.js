// ! In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.

// JavaScript variables can also contain many values.

// Objects are variables too. But objects can contain many values.

// Object values are written as name : value pairs (name and value separated by a colon).

// Example
let person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// If person is an object, the following statement will not create a copy of person:

// const x = person;  // Will not create a copy of person.
// The object x is not a copy of person. It is person. Both x and person are the same object.

// Any changes to x will also change person, because x and person are the same object.

// Example
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person;
x.age = 10;      // Will change both x.age and person.age