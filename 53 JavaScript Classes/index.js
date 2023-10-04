class ClassMates{
	constructor(name,age){
    	this.name=name;
      	this.age=age;
    }
  	displayInfo(){
    	return this.name + "is " + this.age + " years old!";
    }
}

let classmate = new ClassMates("Mike Will",15);
classmate.displayInfo();  // result: Mike Will is 15 years old!

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age(year)} years old`)



class Students {
    name;
    address;
    schoolName = "Morning Sun School";
    constructor(name,address,fatherName){
        this.name = name;
        this.address = address;
        this.fatherName = fatherName;
    }
}
const olivia = new Students("Olivia", "USA","James");
const emma = new Students("Emma", "UK", "alex");
console.log(olivia);
console.log(emma);

// ? Output of Olivia
/* Students {
    name: 'Olivia',
    address: 'USA',
    schoolName: 'Morning Sun School',
    fatherName: 'James'
  }
// Output of Emma
  Students {
    name: 'Emma',
    address: 'UK',
    schoolName: 'Morning Sun School',
    fatherName: 'alex'
  }
0
 */


class User {
  
}