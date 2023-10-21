//There are 2 main ways to create an Object in JavaScript

//The First Method:
let firstPlayer = new Object();

//You can add properties like this:
firstPlayer.name = "Player 1";
firstPlayer.level = 3;
firstPlayer.inventory = [
  "a half-eaten cracker",
  "some pocket lint",
  "a flimsy tree branch",
];
firstPlayer.description =
  "Don't mention Player 2 around them, they'll get angry...";

//You can create methods like this:
firstPlayer.checkLevel = function () {
  console.log(`${this.name} is currently... Level ${this.level}!`);
  //The "this" keyword refers to the object
};

firstPlayer.checkLevel();
//This will print "Player 1 is currently... Level 3!" to the Console

//The Second Method:
let secondPlayer = {
  //You can add properties like this:
  name: "Player 2",
  level: 20,
  inventory: [
    "a health potion",
    "a sack of gold coins",
    "a sturdy steel blade",
  ],
  description: "Better than Player 1 in every way possible.",

  //You can create methods like this:
  checkLevel: function () {
    console.log(`${this.name} is currently... Level ${this.level}!`);
    //The "this" keyword refers to the object
  },
};

secondPlayer.checkLevel();
//This will print "Player 2 is currently... Level 20!" to the Console

//And that's it! Decide what method you prefer and start making some Objects!

const person = {
  name: "shakil",
  age: 21,
};

/* // ! In JavaScript there are multiple ways you can use to access one of those properties. These are dot notation, bracket notation and destructuring. Dot notation is sometimes also called dot property accessor. Another name for bracket notation is square brackets property access. There is one important thing to mention.

All these ways assume you know the name of the property you want to access. If you don’t know it, nothing is lost. You can loops to iterate over the object to get all properties, including the one you want. But now, let’s take a look at those three ways you can use to access object properties. */

/* //* Dot notation
Dot notation, or dot property accessor, is probably the most popular way to access object properties in JavaScript. This method is very easy to learn and just as easy to use. The syntax is as follows. First, you specify some object. Second, you specify the name of the property. Between the object and property name goes a dot (.).

You can use the same process also to access deeper properties. In this case, you chain multiple properties together. You chain them in the way they are nested. So, the most shallow property will come as first, right after the object name. The deepest property will come as the last one: obj.shallowProp.deeperProp.DeepestProp.

Let’s say you want to access property whose value is an array. You want to access specific item in that array. In this case, you can do what you would normally do if the array was a variable. You use the dot notation to access the property you want. After that, you use square brackets and index to get the item in the array you want. */

// Create an object using object literal:
const myObj = {
  name: "Anthony Edward Stark",
  alias: "Iron Man",
  gender: "male",
  education: "MIT",
  affiliation: {
    current: "Avengers",
  },
  creators: ["Stan Lee", "Larry Lieber", "Don Heck", "Jack Kirby"],
  status: {
    alignment: "good",
  },
};
// Accessing object properties with dot notation:
// First: name of the object.
// Second: name of the property to access.
// Third: dot character between the object and property.
console.log(myObj.name);
// Output:
// 'Anthony Edward Stark'
console.log(myObj.alias);
// Output:
// 'Iron Man'
// Accessing deeper object properties:
// Access the "current" property that exists
// in nested object assigned to "affiliation" property
console.log(myObj.affiliation.current);
// Output:
// 'Avengers'
// Accessing array items in objects:
// Access the first item inside the array
// assigned to "creators" property.
console.log(myObj.creators[0]);
// Output:
// 'Stan Lee'
