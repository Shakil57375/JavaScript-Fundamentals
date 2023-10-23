const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  document.getElementById("demo").innerHTML = person;

  for(elements in person){
    console.log(person[elements])
  }