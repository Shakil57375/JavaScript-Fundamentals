const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
    console.log(person[x])
}

const name = "Shakil"
for(var nam of name){
    console.log(nam)
}

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(cars)
  console.log(x)
}