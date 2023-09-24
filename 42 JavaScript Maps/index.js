/* Method	Description
new Map()	Creates a new Map object
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map */
 // Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
// console.log(fruits.size) 
// to check a key was in the array or not use Map.has()
// console.log(fruits.has("apples"))

// List all entries
/* let text = "";
fruits.forEach (function(value, key) {
  console.log(key)
  console.log(value)
  text += key + ' = ' + value;
}) */

// console.log(text)

// List all entries
let text = "";
for (const x of fruits.entries()) {
  console.log(x)
  text += x;
}

console.log(text)

// Create a Map
/* const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("apples"))
console.log(fruits.delete("oranges"))
console.log(fruits)
 */