// Use to remove duplicate elements from the array
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.
/* 
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists
clear()	Removes all elements from a Set
forEach()	Invokes a callback for each element
values()	Returns an Iterator with all the values in a Set
keys()	Same as values()
entries()	Returns an Iterator with the [value,value] pairs from a Set
Property	Description
size	Returns the number elements in a Set
 */

// Create a Set
const NewLetters = new Set(["a","b","c"]);

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

//spreading numbers of the object into an array using the new operator
console.log([...new Set(numbers)]);

// [2, 3, 4, 5, 6, 7, 32]

/* // Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c"); 
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
*/

/* 
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters)
 */

// Create a Set
const letters = new Set(["a","b","c"]);

/* // List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text) */

/* 
The values() Method
The values() method returns an Iterator object containing all the values in a Set:
 */
// letters.values()   // Returns [object Set Iterator]

// Create an Iterator
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}