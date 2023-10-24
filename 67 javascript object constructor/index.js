// We also learned that you can not add a new property to an existing object constructor:
class Person {
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = function(){
            return this.firstName + ' ' + this.lastName 
        }
    }
}

const shakil = new Person("shakil", "hosssain")
const shakil2 = new Person("shakil2", "hosssain2")
// Adding a new property to an existing object is easy:
shakil.country = "BD"
// Adding a new property to an existing object is easy:
shakil2.age = 21
// Adding a new method to an existing object is easy:
shakil.profession = function () {
    return `${this.firstName} is a student`;
};

console.log(shakil.profession())
console.log(shakil2.fullName())