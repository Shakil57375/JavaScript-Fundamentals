function Person(name, age) {
    let person = {};
    person.name = name;
    person.age = age;
    person.eat = function(){
        console.log(`person is eating`)
    }
    person.sleep = function(){
        console.log(`person is sleeping`)
    }
    return person
}

const sakib = Person("Sakib", 35)
const tamim = Person("Tamim", 36)