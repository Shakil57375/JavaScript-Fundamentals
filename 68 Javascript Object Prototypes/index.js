// The JavaScript prototype property allows you to add new properties to object constructors:
class Person {
    constructor(first, last, age, eyeColor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyeColor;
    }
}

// The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = "Bangladeshi";
// The JavaScript prototype property also allows you to add new methods to objects constructors:

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myFather.nationality)