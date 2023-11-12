/* const obj = '{"name":"John", "age":30, "city":"New York"}';
// convert to valid JS object
const myObj = JSON.parse(obj)
console.log(myObj.name) */
// Exceptions
// Parsing Dates
// Date objects are not allowed in JSON.

// If you need to include a date, write it as a string.

// You can convert it back into a date object later:

// Example
// Convert a string into a date:

/* const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth); */


/* Or, you can use the second parameter, of the JSON.parse() function, called reviver.

The reviver parameter is a function that checks each property, before returning the value.

Example
Convert a string into a date, using the reviver function: */
// convert to valid js Array
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(`${obj.name} born on ${obj.birth}`);

/* Parsing Functions
Functions are not allowed in JSON.

If you need to include a function, write it as a string.

You can convert it back into a function later:

Example
Convert a string into a function:
 */
const text1 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj1.age = eval("(" + obj1.age + ")");

// You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.
