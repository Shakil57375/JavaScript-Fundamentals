//Iterable objects are objects that can be iterated over with for loops
//Technically, iterables must implement the Symbol.iterator method.
const name = "W3Schools";

for (const x of name) {
  console.log(x)
}

const letters = new Set(["a","b","c"]);

for (const x of letters) {
  console.log(x)
}