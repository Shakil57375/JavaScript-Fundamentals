/* function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;
  person.eat = () => {
    console.log(`person is eating`);
  };

  person.sleep = function () {
    console.log(`person is sleeping`);
  };
  return person
};

const sakib = Person("sakib", 33)
const tamim = Person("tamim", 36) */

// creating a child blank object

const captain = {
    name : "Mash",
    age : 33,
    country : "Bangladesh"
}

const player = Object.create(captain)
console.log(player.name)