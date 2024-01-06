// Insert, Remove, or Edit a Property using Object Destructuring:

// Inserting a Property:
const originalObject = { a: 1, b: 2 };
const modifiedObject = { ...originalObject, c: 3 };
console.log(modifiedObject); // { a: 1, b: 2, c: 3 }

// Removing a Property:
const { b, ...newObject } = originalObject;
console.log(newObject); // { a: 1 }

// Editing a Property:
const { b: modifiedB } = originalObject;
const editedObject = { ...originalObject, b: modifiedB + 10 };
console.log(editedObject); // { a: 1, b: 12 }

// Working with Nested Object Destructuring:

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  name,
  address: { city },
} = person;
console.log(name); // John
console.log(city); // New York

// Adding a Dynamic Property to an Object using Destructuring:

const dynamicKey = "dynamicallyAdded";
const dynamicValue = "New Value";

const { [dynamicKey]: addedProperty, ...newObjectWithDynamicProperty } =
  originalObject;

const modifiedObjectWithDynamicProperty = {
  ...newObjectWithDynamicProperty,
  [dynamicKey]: dynamicValue,
};

console.log(modifiedObjectWithDynamicProperty);
// { a: 1, dynamicallyAdded: 'New Value' }
// object destructuring.
const obj = {
  name: "Shak",
  education: {
    ssc: {
      school: "phs",
    },
  },
};

const {
  education: {
    ssc: { school },
  },
} = obj;

console.log(school);

/* Imagine you want to get the first element out of an array. Normally you would do this by accessing the element at index 0.
 */
const array = ["A", "B", "C", "D", "E"];
const first = array[0];

console.log(first);
// A

/* this is not really a big deal, but this can be slightly simplified with destructuring. Instead of getting each element we want individually we will get all elements at once. */

const array1 = ["A", "B", "C", "D", "E"];
const [first1, second] = array1;

console.log(first1);
// A
console.log(second);
// B

/* if you want to skip an element, for example if you only want elements one and three, you would just leave out the name for the second variable, but keep the comma. This comma tells JS to just skip the second element.
 */
const array2 = ["A", "B", "C", "D", "E"];
const [first2, , third] = array2;

console.log(first2);
// A
console.log(third);
// C

const person1 = { name1: "Kyle", age: 25, favoriteFood: "Rice" }
const { name1, ...rest } = person1

console.log(name1)
// Kyle
console.log(rest)
// { age: 25, favoriteFood: 'Rice' }

// !Nested Object Destructuring
/* It is pretty common to have an objected nested inside another object and want to get a specific value from it. With destructuring this is incredibly easy.
 */
const person2 = {
  name2: "Kyle",
  age: 25,
  address: {
    city2: "Somewhere",
    state: "One Of Them",
  },
}
const {
  name2,
  address: { city2 },
} = person2

console.log(name2)
// Kyle
console.log(city2)
// Somewhere

// ! Default Values
/* It is pretty common to destructure an object without knowing if a property exists or not. Many times when this is the case there is a default value you want to apply in case that value does not exist. */

const person4 = { name4: "Kyle", age: 25 , favoriteFood : "watermelon" }
const { name4 = "Sally", favoriteFood = "Banana" } = person4

console.log(name)
// Kyle
console.log(favoriteFood)
// Banana

// Destructuring Function Parameters
/* In JavaScript it is very common to pass an object to a function so having the ability to destructure the object in the function definition and define defaults is incredibly useful. */

function printPerson({ name, age, favoriteFood = "None" }) {
  console.log(`Name: ${name}. Age: ${age}. Food: ${favoriteFood}.`)
}

const person5 = { name: "Kyle", age: 25 }

printPerson(person5)
// Name: Kyle. Age: 25. Food: None.