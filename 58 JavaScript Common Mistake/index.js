/* Accidentally Using the Assignment Operator
JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment operator (=), instead of a comparison operator (==) in an if statement.

This if statement returns false (as expected) because x is not equal to 10: */

let x = 0;
if (x == 10) {
}

// This if statement returns true (maybe not as expected), because 10 is true:

let y = 0;
if ((y = 10)) {
}

/* 1.//! Not Returning From a Function
If you’ve ever called a function and gotten a response of undefined, you’ve probably already seen this mistake. Functions in JavaScript return a value of undefined by default, which means if you don’t explicitly return anything with the return keyword, undefined will be the result.

So instead of this. */

/* const getAddedValue = (a, b) => {
  a + b;
}; */
// Make sure you actually return the result.

const getAddedValue = (a, b) => {
  return a + b;
};

/* 2. //!Loading JavaScript Scripts in HTML Before the DOM Is Loaded
This is the only example that is going to touch a bit on how JavaScript interacts with HTML and the DOM. The key in how they interact is that the timing is important. If you want to reference a DOM element in your JavaScript, that DOM element must have already been loaded on the page. Let’s look at an example.

Let’s say you have a bit of HTML that also imports a JavaScript file called script.js. Notice the JavaScript file is imported before the h1 element with the id of header.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JavaScript Mistake Demo</title>
  </head>
  <body>
    <script src="script.js"></script>
    <h1 id="header">Hello world</h1>
  </body>
</html>
Then, in your JavaScript, you want to get a reference to the header element and update its text.

const header = document.getElementById('header');
header.innerText = "James is cool!";
In this case, you’re going to get an error: Cannot set properties of null (setting 'innerText'). This is because the JavaScript is trying to get a reference to a DOM element that has not been loaded on the page yet.

To fix this, it’s common to import your JavaScript at the bottom of your HTML, after all of the HTML elements have been loaded.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JavaScript Mistake Demo</title>
  </head>
  <body>
    <h1 id="header">Hello world</h1>
    <script src="script.js"></script>
  </body>
</html>
This way, the JavaScript file is being loaded after the header element has already been loaded.

It’s important to note that there are also other options to explore in terms of importing your JavaScript files in your HTML. What we’ve shown is a basic example targeted at beginners, but there are additional keywords that you can look into for more details. */

/* 3. //!Reassigning Const Variables
This is such a common mistake that it continues to happen to me almost on a daily basis, so don’t feel bad if it does to you. As of ES6 (JavaScript version released in 2015), there are two main ways to declare variables: const and let. These two have, for the most part, replaced the usage of var in modern JavaScript.

The difference between these two is that you cannot reassign const variables while you can with let. Here’s a piece of sample code.

const count = 0;
for (let i = 0; i < 10; i++) {
  count = count + i;
}
console.log(count);
In this case you’ll get an error: Assignment to constant variable. If you’re going to need to reassign a variable, make sure to use let.

let count = 0;
for (let i = 0; i < 10; i++) {
  count = count + i;
}
console.log(count); */

/* 4.//! Misunderstanding Variable Scope
Variable scope is a tricky concept for new developers, especially in JavaScript. One common problem I see from learning developers is defining a variable inside of a function and expecting to be able to access that variable outside of the function it is defined in.

That’s a pretty generic problem I see. Let’s take a look at a more JavaScript specific example though. This goes back to the usage of const and let vs var. I mentioned that var is a more outdated way of declaring variables, but you will still come across it in documentation and source code. Because of that, it’s important to understand how scoping differs with it.

If you define a variable using var inside of a for loop, for example, that variable is also accessible after the for loop. Here’s a quick example.

for (let i = 0; i < 10; i++) {
  var count = 5;
}
console.log(count);
This code will actually work although it’s counter-intuitive to me. The value of count is accessible after the for loop it was defined in. However, this does not work for const and let variables. If defined inside of a for loop, they are only accessible inside of that for loop.

for (let i = 0; i < 10; i++) {
  const count = 5;
}
console.log(count); //error: count is not defined */

//! 5. Poorly Named Variables
// Poorly named variables make code one million times more difficult to read and follow. This is a mistake I’ve seen every single beginner developer that I’ve worked with make. Using names like thing1, thing2, and anotherThing give no context as to what the variables are. This makes it much harder for me to help debug someone’s code. Let’s take a look at an example.

// const arr = ["James", "Jess", "Lily", "Sevi"];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   const tmp = arr[i];
//   str += tmp[0];
// }
// console.log(str);
// The variables arr, str, and tmp give no context for what the variables are and what the code is doing. Here’s an example that uses naming conventions that add much more context.

// const names = ["James", "Jess", "Lily", "Sevi"];
// let retVal = "";
// for (let i = 0; i < arr.length; i++) {
//   const name = arr[i];
//   retVal += name[0];
// }
// console.log(retVal);
// One of the easiest pieces of advice I have is to name arrays as the pluralized version of the type of info they hold. For example, an array of names should be called names. Then, you can reference an individual items inside of that array as name. I commonly see an array named in the singular form, and it’s incredibly confusing.

// 6. Too Large of Functions
// This is a pretty meta mistake, but it’s extremely common early on. When developers learn about functions in JavaScript, they often have the tendency to write one function and dump all the code they need into it. However, it’s better to start thinking about how to break functions into smaller pieces of code that are more readable, composable, etc. Instead of a code example, here are a few extra links you can read for more.

// https://medium.com/swlh/how-long-should-functions-be-how-do-we-measure-it-cccbdcd8374c
// https://softwareengineering.stackexchange.com/questions/133404/what-is-the-ideal-length-of-a-method-for-you

//! 7. Unnecessary Else Statements
// What often gets misunderstood is that a return statement inside of a function actually stops the execution of that function. In other words, after you return inside of a function, no other code inside of that function gets run. Because of that, I often see unnecessary else statements. Here’s an example.

// const isOdd = (num) => {
//   if (num % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Because we already have a return in the if condition, the else is unnecessary. We simplify this code by removing the else condition.

// const isOdd = (num) => {
//   if (num % 2 === 1) {
//     return true;
//   }
//   return false;
// };
// You can even take this one step further and return the evaluated expression directly since num%2 === 1 returns a boolean.

// const isOdd = (num) => {
//   return num % 2 === 1;
// }

//! 8. Not Short-circuiting Loops
// Short-circuiting is another way to improve your for loops. Let’s say write a function where you need to determine whether an array of numbers includes an even number. Here’s an example of how you might solve that.

// const hasEvenNumber = (numbersArr) => {
//   let retVal;
//   for(let i =0; i< numbersArr.length; i++){
//     if(numbersArr[i] % 2 === 0){
//       retVal = true;
//     }else {
//       retVal = false;
//     }
//   }
//   return retVal;
// }
// In this case, we are iterating through each number and updating a boolean accordingly based on if the number is even. Unfortunately, there’s a problem. Let’s say the first number is even, but then the next number is odd. Well, the boolean is updated to true for even, then back to false for the odd number.

// This would give the incorrect answer since you just want to know if the function has at least one even number (it should return true). In this case, after you see the first even number, you have your answer. You don’t need to look anymore. This is where short-circuiting comes into play. After you see one even number, return. If you never see one, return false at the end.

// const hasEvenNumber = (numbersArr) => {
//   for(let i =0; i< numbersArr.length; i++){
//     if(numbersArr[i] % 2 === 0){
//       return true;
//     }
//   }
//   return false;
// }
// This way, your logic is cleaner and you’re avoiding unnecessarily iterating through additional items in the array.

// 9. Double vs Triple Equals
// This is a huge topic of confusion in JavaScript. To start, it’s important to know that the double equals compares two values without taking into account their data types. On the flip side, the triple equals compares two values while taking into account their data types.

// Since the double equals doesn’t take into account the data types of the two values, JavaScript has to have some way to compare them. To do this, JavaScript secretly will cast (convert one data type to another) each value accordingly so they can be compared. This means that a number and string could be considered to be double equal but not triple equal since they are different data types.

// const jamesAge = "31";
// const jessAge = 31;

// console.log(jamesAge == jessAge); //equal
// console.log(jamesAge === jessAge); //not equal
// General piece of advice: use triple equals by default unless you have a specific reason to use double equals. It’s typically safer and helps avoids unintended results. For more details on how these equalities work, check out the MDN docs.

// 10. Incorrect Object vs Primitive Comparisons
// Another similar problem that I see is trying to compare primitives and objects for equality. There are seven primitive values in JavaScript.

// number
// string
// bigint
// boolean
// undefined
// symbol
// null
// Everything else is represented as an object, and objects and primitives are referenced differently. In JavaScript, primitives are referenced directly by their value. On the other hand, objects more generically reference a space in memory where the value(s) is stored. This leads to some confusion when objects and primitives. Consider this example.

// const name1 = "James";
// const name2 = "James";
// console.log(name1 === name2);
// Since these two variables are primitives with the same value they are considered equal, but what if we compare two objects with the same name property like so?

// const person1 = {
//   name:"James"
// }
// const person2 = {
//   name:"James"
// }
// console.log(person1 === person2);
// In this case, these two objects are not considered equal. This is because the two variables are actually references to different “spaces in memory”. Although they look the same, they aren’t considered to be equal because of this. If you wanted to compare their equality more appropriately, you could compare their name properties directly.

// const person1 = {
//   name:"James"
// }
// const person2 = {
//   name:"James"
// }
// console.log(person1.name === person2.name);