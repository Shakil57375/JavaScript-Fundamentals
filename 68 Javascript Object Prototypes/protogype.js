// ? what is prototype?
// * prototype is javascript function property which denotes an object
// ! function without new keyword
/* function Person(name, age) {
  let person = Object.create(Person.prototype);
  console.log(person);
  person.name = name;
  person.age = age;
  return person;
} */
// object prototype
/* Person.prototype = {
  eat() {
    console.log(`the person is eating`);
  },
  sleep() {
    console.log(`the person is sleeping`);
  },
  play() {
    console.log(`the person is playing`);
  },
}; */

/* const sakib = new  Person("sakib", 33);
const tamim = new Person("tamim", 36); */

// ! function with a new keyword
 
function Person(name, age){
  // image the comments 
  // just image if u use constructor function then it will happen.
  // let this = Object.create(Person.prototype)
    this.name = name;
    this.age = age;
  // return this;
  
}

Person.prototype = {
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

const sakib = new  Person("sakib", 33);
sakib.play()
const tamim = new Person("tamim", 36);
tamim.eat()
const shakil = new Person("shakil", 21)



// creating a child blank object
const captain = {
  name: "Mash",
  age: 33,
  country: "Bangladesh",
};

const player = Object.create(captain);
console.log(player.name);
