class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
//   methods 
//  you can add as many methods as u want.
  age(){
    const date = new Date()
    const CarAge = date.getFullYear() - this.year
    return CarAge
  }
  brand(status){
    console.log(`${this.name} is car of toyota brand ${status}`)
  }
}

/* The example above creates a class named "Car".
The class has two initial properties: "name" and "year".
A JavaScript class is not an object.
It is a template for JavaScript objects. */

const myCar1 = new Car("Ford", 2014); // crate actual object
const myCar2 = new Car("Audi", 2019); // crate actual object
myCar1.brand("good")
console.log(myCar1.age())
console.log(myCar2.age())
console.log(myCar1)
console.log(myCar2);