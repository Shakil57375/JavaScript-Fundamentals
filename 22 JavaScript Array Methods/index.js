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
// delete fruits[0]
// console.log(fruits) // will delete the first element and will leave a empty space to the array from where it removes the element what will create a hole in the array thats why it is recommended to use push and pop method to delete or insert any element from the array. if we console fruits[0] it will give us undefined

// The splice() method can be used to add new items to an array:
fruits[0] = "cucumbar";

fruits.splice(2, 0, "Lemon", "Kiwi"); // will remove 0 elements will add "lemon" and "kiwi" from the 2 position.
// console.log(fruits) //[ 'cucumbar', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'pineapple', 'Kiwi' ]
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

fruits.splice(1, 3, "pinnate", "dragon fruit"); // 3 element will be removed and "pinnate" and "dragon fruit" will be added from 1 position.
// console.log(fruits) //[ 'cucumber', 'pinnate', 'dragon fruit', 'Apple', 'pineapple', 'Kiwi' ]

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
fruits.splice(2, 2); // will remove 2 elements from the array from position 2 and there and will not create any hole to the array
// console.log(fruits) // [ 'cucumber', 'pinnate', 'pineapple', 'Kiwi' ]
// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.
// const splice = fruits.splice(2,2)
// console.log(splice) // will return the elements which he removed. // [ 'pineapple', 'Kiwi' ]

// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myBoys.concat(myGirls);
// console.log(myChildren)
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildrens = arr1.concat(arr2, arr3);
// console.log(myChildrens)
/* [
    'Cecilie', 'Lone',
    'Emil',    'Tobias',
    'Linus',   'Robin',
    'Morgan'
  ] */
//   The concat() method can also take strings as arguments:
const arr5 = ["Emil", "Tobias", "Linus"];
const myChildrenss = arr5.concat("Peter", "shakil");
// console.log(myChildrenss) //[ 'Emil', 'Tobias', 'Linus', 'Peter', 'shakil' ]
// // The slice() method slices out a piece of an array into a new array.
const citrus = fruits.slice(1)
console.log(citrus) // will remove the first element because the last number we include it will work on it. It will work before the number we provided so we provided 1 that's why it will remove the 0 position element from the array.
const slice = fruits.slice(1, 3);// will remove the number 1 position element and number 2 position element.
/* 
The slice() method creates a new array.
The slice() method does not remove any elements from the source array
 */
console.log(slice);
console.log(fruits);
