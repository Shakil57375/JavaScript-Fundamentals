// there is four type of binding in javascript
// implicit binding
// explicit binding
// new binding
// window binding

/* let shakil = {
    name : "Shakil",
    age : 33,
    PrintMyName : function(){
        console.log(this.name)
    }
}

shakil.PrintMyName() */

/* var printPlayerNameFunction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name)
    }
}

var shakil = {
    name : "Shakil",
    age : 24
}

var tamim = {
    name : "Tamim",
    age : 24
}

printPlayerNameFunction(shakil)
printPlayerNameFunction(tamim)

shakil.printPlayerName()
tamim.printPlayerName() */

// implicit binding

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(`1 ${this.name}`);
    },
    father: {
      printName: function () {
        console.log(`2. ${this.name}`);
      },
    },
  };
};

var sakib = Person("sakib", 35);
sakib.printName()
const father = {
  name : "mr.y"
}
sakib.father.printName.call(father); 

// explicit binding

/* var printName = function (r1, r2, r3) {
  console.log(`${this.name} is ${r1}, ${r2} and ${r3}`);
};

var sakib = {
  name: "Sakib",
  age: 35,
};

var v1 = "Handsome";
var v2 = "All-rounder";
var v3 = "best player";

var v = [v1, v2, v3]
printName.call(sakib, v1, v2, v3);
printName.apply(sakib, v);
var newFunc = printName.bind(sakib, v);
newFunc() */

/* Function Borrowing
With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object: */
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);


// new binding

/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`${name} is ${age} year old`);
    }
}

var sakib = new Person("Sakib", 33) */

/* function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(`${name} is ${age} year old`)
}

var sakib = new Person("Sakib", 33) */

// window binding
var PrintName = function (){
    console.log(this.name) // undefined
}

var sakib = {
    name : "Sakib"
}

PrintName()