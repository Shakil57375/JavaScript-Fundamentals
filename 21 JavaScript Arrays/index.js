/* The difference between innerText and innerHTML is:
innerText displays only text if you write tags it will display the tags name and will not work as a HTML tags like if you  write <p>Hello</p> it will display <p>Hello</p>
on the other hand if you write <p>Hello</p> in innerHTML it will display Hello
 */

// const cars = ["valvo", "sab", "toyota"]
// document.getElementById("demo").innerText = cars
// accessing the first element
// cars[0] = "BMW"
// console.log(cars[0])
// accessing the last element
// const cars = ["valvo", "sab", "toyota"]
// cars[3] = "Ford"
// const last = cars[cars.length - 1];
// console.log(last) //object

// const cars = ["valvo", "sab", "toyota", "BMW"];

// for(let i = 0; i < cars.length; i++){
//     console.log(i)
//     console.log(cars[i])
// }

// forEach

// function myFunc(value) {
//     console.log(value)
// }

// cars.forEach(myFunc)

// cars.push("Ford")
// cars[cars.length] = "SKY"
// console.log(cars)

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"

/* 
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

 Example:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
 */

/* 
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.
*/

const obj = {
    name : "h"
}

const cars = ["valvo", "sab", "toyota", "BMW"];
console.log(Array.isArray(cars)) // true
console.log(Array.isArray(obj)) //false