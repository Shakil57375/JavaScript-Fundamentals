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