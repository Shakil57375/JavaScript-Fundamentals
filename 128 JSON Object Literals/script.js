// This is a JSON string:
'{"name":"John", "age":30, "car":null}'; //! JSON
// Inside the JSON string there is a JSON object literal:
// {"name":"John", "age":30, "car":null} //! JSON object literals.
let object = {
  name: "Petya",
  age: 15,
}; //!object

// This is a JSON string:
'["Ford", "BMW", "Fiat"]'
// Inside the JSON string there is a JSON array literal:

["Ford", "BMW", "Fiat"]

/* JSON object literals are surrounded by curly braces {}.

JSON object literals contains key/value pairs.

Keys and values are separated by a colon.

Keys must be strings, and values must be a valid JSON data type:

string
number
object
array
boolean
null
Each key/value pair is separated by a comma.

It is a common mistake to call a JSON object literal "a JSON object".

JSON cannot be an object. JSON is a string format.

The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object. */
