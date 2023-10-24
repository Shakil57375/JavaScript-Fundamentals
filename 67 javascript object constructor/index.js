// can't add any elements on the object template
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
shakil.country = "BD"
shakil2.age = 21
console.log(shakil)
console.log(shakil2.fullName())