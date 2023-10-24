const personMethods = {
  eat() {
    console.log(`the person is eating`);
  },
  sleep() {
    console.log(`the person is sleeping`);
  },
  play() {
    console.log(`the person is playing`);
  },
};
function Person(name, age) {
  let person = Object.create(personMethods);
  console.log(person);
  person.name = name;
  person.age = age;
  return person;
}

const sakib = Person("sakib", 33);
const tamim = Person("tamim", 36);
sakib.eat()
// creating a child blank object

const captain = {
  name: "Mash",
  age: 33,
  country: "Bangladesh",
};

const player = Object.create(captain);
console.log(player.name);
