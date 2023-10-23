const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  const personArray = Object.values(person)
  for(let values of personArray){
    console.log(values)
  }

//   document.getElementById("demo").innerHTML = person;

//   for(elements in person){
//     console.log(person[elements])
//   }

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person1);
  console.log(myString)

//   Stringify Dates
// JSON.stringify converts dates into strings:

// Example
const person2 = {
  name: "John",
  today: new Date()
};

let myString1 = JSON.stringify(person2);
console.log(myString1)

// Stringify Arrays
// It is also possible to stringify JavaScript arrays:

// Example
const arr = ["John", "Peter", "Sally", "Jane"];

let myString2 = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString2;
console.log(typeof myString2)

// Stringify Functions
// JSON.stringify will not stringify functions:

// Example
const person5 = {
  name: "John",
  age: function () {return 30;}
};

let myString5 = JSON.stringify(person5);
document.getElementById("demo").innerHTML = myString5;
// This can be "fixed" if you convert the functions into strings before stringifying.

// Example
const person6 = {
  name: "John",
  age: function () {return 30;}
};
person6.age = person6.age.toString();

let myString8 = JSON.stringify(person6);
document.getElementById("demo").innerHTML = myString8;