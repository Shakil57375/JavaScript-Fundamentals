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