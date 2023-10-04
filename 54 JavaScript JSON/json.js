// JavaScript JSON
/* JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language. */

/* JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays */

/* {
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
  ]
}
 */

/* JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript object properties.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

"firstName":"John" */
// !JSON names require double quotes. JavaScript names do not.

/* JavaScript object is a key value pair(like Python dict)
but its keys need not be strings and even if they are str

we need not use ' '(they can have functions, objects , arrays as values).

JSON can be either like an array or an object, 
if its like an object values can never be functions

and keys need to be only str that too in ' '(quotes) strictly

and at last this object/array is itself quoted hence json is a string.

to convert JSON(or JSON string, same thing) to js object:
JSON.parse()
to convert from js object to JSON 
JSON.stringify() */

/* JSON Arrays
JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
In the example above, the object "employees" is an array. It contains three objects.

Each object is a record of a person (with a first name and a last name). */
/* Converting a JSON Text to a JavaScript Object
A common use of JSON is to read data from a web server, and display the data in a web page.

For simplicity, this can be demonstrated using a string as input.

First, create a JavaScript string containing JSON syntax:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; */
//! Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
// converting json/text t0 object by sing parse
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
console.log(text);
console.log(obj);
// console.log(obj.employees[0].firstName)
// object to json
let employee = { firstName: "John", lastName: "Doe" };
console.log(JSON.stringify(employee))