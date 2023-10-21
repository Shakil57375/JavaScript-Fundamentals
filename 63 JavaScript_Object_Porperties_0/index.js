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

// Create an object:
myObj = {
    1: 'First property',
    'first-name': 'Bruce',
  }
  
  // Try to use dot notation
  // to access properties on "myObj".
//   console.log(myObj.1)
  // Output:
  // SyntaxError: Unexpected token
  
  console.log(myObj.first-name)
  // Output:
  // NaN
  
  
  // Try to use bracket notation
  // to access properties on "myObj".
  console.log(myObj['1'])
  // Output:
  // 'First property'
  
  console.log(myObj[1])
  // Output:
  // 'First property'
  
  console.log(myObj['first-name'])
  // Output:
  // 'Bruce'

/* //! Bracket notation
The second way you can use to access object properties is bracket notation. The main characteristic of method this method are square brackets. The syntax is similar to the dot notation. However, there are some important differences. You again start with the name of the object you are working with.

As second comes the name of the property. Here, you have to wrap the name of the property with quotes and square brackets. It doesn’t matter if you use single or double quotes. What matters is that you use them to wrap the name of the property. Then, you wrap this with square brackets and put it after the object. No dot between them.

Bracket notation also allows you to access deeper properties. This works similarly to dot notation. All properties are chained together, from the most shallow to the deepest. In case of brackets, there are no dots between properties. Furthermore, you must wrap all properties with quotes and square brackets.

Accessing items inside arrays assigned to properties works similarly. First, specify the property name and wrap it with quotes and square brackets. Then, add additional pair of square bracket with the index of the item you want to access. */
// Create an object:
const myObj1 = {
    name: 'Bruce Thomas Wayne',
    alias: 'Batman',
    affiliation: ['Batman Family', 'Justice League', 'Outsiders', 'Guild of Detection'],
    status: {
      alignment: 'good',
      occupation: 'businessman'
    }
  }
  
  
  // Accessing object properties with bracket notation:
  // First: name of the object.
  // Second: name of the property to access.
  // Note: property name must be wrapped with quotes
  // and then with square brackets.
  console.log(myObj1['name'])
  // Output:
  // 'Bruce Thomas Wayne'
  
  
  // Accessing deeper object properties:
  // Access the "alignment" property that exists
  // in nested object assigned to "status" property
  console.log(myObj1['status']['alignment'])
  // Output:
  // 'good'
  
  
  // Accessing array items in objects:
  // Access the second item inside the array
  // assigned to "affiliation" property.
  console.log(myObj1['affiliation'][1])
  // Output:
  // 'Justice League'

  // Create an object:
const myObj11 = {
    name: 'James Howlett',
    alias: 'Wolverine',
    status: {
      alignment: 'good'
    }
  }
  
  // Assign a property you want to access to a variable:
  const myProp = 'alias'
  
  // Use the variable to access specific property ("alias"):
  // Referencing "myProp" will return value "alias",
  // which will be used to access the same property ("alias").
  // I.e.: myObj11[myProp] => myObj11['alias']
  console.log(myObj11[myProp])
  // Output:
  // 'Wolverine'