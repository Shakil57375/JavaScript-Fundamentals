// A Map holds key=value pairs where the keys can be any datatypes.
// create map
const fruits = new Map([
    ["orange", 333],
    ["apple", 333],
])

console.log(fruits)
// another way 
const fruit = new Map()
fruit.set("lemon", 200)
// any datatype
fruit.set(22, 200)
// change values
fruit.set("lemon", 300)
console.log(fruit)
// get values
console.log(fruits.get("orange"))
// find size of the map
console.log(fruits.size)
// delete elements
console.log(fruits.delete("apple"))
console.log(fruits)
// find key by using has
console.log(fruits.has("orange"));
console.log(fruits.has("apple"));
// find out if it's map or not?
console.log(fruit instanceof Map)
// the main difference between object and map is their key datatypes in object key will be only string but in map key can be any data type key can be a object also as an example:
// create objects
const apples = {name : "Apple"} 
const orange = {name : "orange"} 
const banana = {name : "banana"} 
// create a map

// create a map

const lotsOfFruits = new Map()
lotsOfFruits.set(apples, 500)
lotsOfFruits.set(orange, 5500)
lotsOfFruits.set(banana, 55500)
console.log(lotsOfFruits)

