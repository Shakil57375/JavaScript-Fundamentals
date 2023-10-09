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