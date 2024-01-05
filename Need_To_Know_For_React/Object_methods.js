// Example object
const exampleObject = { a: 1, b: 2, c: 3 };

// Object.keys(obj) - Get an array of keys from the object
const keysArray = Object.keys(exampleObject);
console.log(keysArray); // Output: ['a', 'b', 'c']

// Object.values(obj) - Get an array of values from the object
const valuesArray = Object.values(exampleObject);
console.log(valuesArray); // Output: [1, 2, 3]

// Object.entries(obj) - Get an array of [key, value] pairs from the object
const entriesArray = Object.entries(exampleObject);
console.log(entriesArray); // Output: [['a', 1], ['b', 2], ['c', 3]]

// Example objects for Object.assign()
const targetObject = { a: 1, b: 2 };
const sourceObject = { b: 3, c: 4 };

// Object.assign(target, source1, source2, ...) - Merge properties from source objects into target object
const mergedObject = Object.assign({}, targetObject, sourceObject);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// Example object for Object.freeze()
const frozenObject = Object.freeze({ x: 1, y: 2 });

// Object.freeze(obj) - Freeze the object, preventing modifications
// frozenObject.z = 3; // Error in strict mode
console.log(frozenObject); // Output: { x: 1, y: 2 }

// Example entries array for Object.fromEntries()
const entriesArrayForFromEntries = [['a', 1], ['b', 2], ['c', 3]];

// Object.fromEntries(entries) - Convert entries array back to an object
const reconstructedObject = Object.fromEntries(entriesArrayForFromEntries);
console.log(reconstructedObject); // Output: { a: 1, b: 2, c: 3 }
