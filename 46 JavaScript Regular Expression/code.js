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
/* let text = "Visit Microsoft!"
let result = text.replace(/visit/i, "go") */
// console.log(result)
// global replace if there is multiple matching elements of replace text it will only return the first and avoid the others if you want to replace all of those use /ig
/* let test = "Hello I am me. I am to he could"
let searched = test.replace(/am/ig , "me")
console.log(searched) */

// 	Find any of the characters between the brackets
/* let text = "Is this all there is?";
let result = text.match(/[h]/g);
console.log(result) */
// 	Find any of the digits between the brackets
/* let text = "123456789";
let result = text.match(/[1-4]/g);
console.log(result) */
// 	Find any of the alternatives separated with |
/* let text = "re, green, red, green, green, gr, blue, yellow";
let result = text.match(/(red|green)/g);
console.log(result) */
/* 
Using test()
The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.
The following example searches a string for the character "e":
*/
// console.log(/e/.test("The best things in life are free!"))

/* 
Using exec()
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.
The following example searches a string for the character "e":
*/

console.log(/e/.exec("The best things in life are free!"))
// go to this link to learn more
/* 
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 */