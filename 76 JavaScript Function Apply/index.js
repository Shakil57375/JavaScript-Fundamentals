/*
call() Method: It calls the method, taking the owner object as argument. 
The keyword this refers to the ‘owner’ of the function or the object 
it belongs to. We can call a method which can be used on different objects. 

apply() Method: The apply() method is used to write methods,
which can be used on different objects. 
It is different from the function call() because it takes arguments as an array.
*/
/* The Difference Between call() and apply()
The difference is: 
The call() method takes arguments separately. 
The apply() method takes arguments as an array.
 The apply() method is very handy if you want to use an array instead of an argument list. */
// ! uses of call method;
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
console.log(person.fullName.call(person1 , "Dhaka", "Bangladesh"));

// ! uses of call method;

const person2 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const person3 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
console.log(person2.fullName.apply(person3 , ["Dhaka", "Bangladesh"]));
