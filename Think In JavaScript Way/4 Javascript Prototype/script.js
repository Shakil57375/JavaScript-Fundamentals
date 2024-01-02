const personMethods = {
  eat() {
    console.log(`Person is playing`);
  },
  play() {
    console.log(`Person is playing`);
  },
};
function Person(name, age) {
  let person = Object.create(personMethods);
  person.name = name;
  person.age = age;
  return person;
}

const sakib = Person("Sakib", 35);
sakib.play();
const tamim = Person("Tamim", 36);

function test() {}

console.log(Array.prototype);
