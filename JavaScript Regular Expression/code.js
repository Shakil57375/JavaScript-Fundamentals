// Use a string to do a search for "W3schools" in a string:
/* let text = "Visit  W3Schools"
let n = text.search("w3Schools") */
// console.log(n)
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:
/* let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n) */
// replace method case sensitive
/* let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools"); */
// replace method case insensitive
let text = "Visit Microsoft!"
let result = text.replace(/visit/i, "go")
console.log(result)