// Step 1: Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add a method to the constructor using prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create instances of the Person object
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// Step 4: Call the sayHello method on each instance
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.

/* 
  Here's a breakdown:

We create a constructor function Person that takes name and age as parameters and assigns them to the object using this.

We extend the Person prototype by adding a sayHello method. This method will be shared among all instances of the Person object, saving memory.

We create two instances of the Person object: person1 and person2, each with different values for name and age.

We call the sayHello method on each instance, demonstrating how the method is shared among all instances through the prototype.
   */
