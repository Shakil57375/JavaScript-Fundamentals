/* The HTMLCollection Object
The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements. */
// The following code selects all <p> elements in a document:
const myCollection = document.getElementsByTagName("p");
/* The elements in the collection can be accessed by an index number.
To access the second <p> element you can write: */
console.log(myCollection[1]);
// The length property defines the number of elements in an HTMLCollection
console.log(myCollection.length);
