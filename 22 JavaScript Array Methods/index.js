const fruits = ["Banana", "Orange", "Apple", "Mango"];
// array to string // will convert the array to string
const toString = fruits.toString();
// console.log(toString)
//array join method // join the array with  *
const join = fruits.join(" * ");
// console.log(join)
// array pop method // will remove the last element of array & also return the removed element.
const pop = fruits.pop();
// console.log(pop)// mango
// array push method // will push the element at the end of the array.
const push = fruits.push("pineapple");
// console.log(push) // will return the length of the array
// array shift method // will remove the first element of the array
const shift = fruits.shift();
// console.log(shift) // will returned element
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const unshift = fruits.unshift("lemon");
// console.log(unshift)// will return the total number of element in the array

/* 
Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...
 */
fruits[0] = "chili"; // will change the first element from lemon to chili.

// The length property provides an easy way to append a new element to an array:
fruits[fruits.length] = "Kiwi";
// console.log(fruits);

/* 
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
 */
delete fruits[0]
// console.log(fruits) // will delete the first element and will leave a empty space to the array from where it removes the element what will create a hole in the array thats why it is recommended to use push and pop method to delete or insert any element from the array. if we console fruits[0] it will give us undefined

// The splice() method can be used to add new items to an array:
 