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
const array = ["A", "B", "C", "D", "E"]
const first = array[0]

console.log(first)
// A

/* this is not really a big deal, but this can be slightly simplified with destructuring. Instead of getting each element we want individually we will get all elements at once. */

const array1 = ["A", "B", "C", "D", "E"]
const [first1, second] = array1

console.log(first1)
// A
console.log(second)
// B