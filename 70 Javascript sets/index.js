// A JavaScript set is a collection of unique values.
// create a set
const letters = new Set(["a", "b", "c", "a"])
// add element to the set
letters.add("d");
let e = "e"
letters.add(e)
// to get the iterator use .values() method
const myIterator = letters.values()
let text = " "
for(let letter of myIterator){
    text += letter
}
console.log(text)

console.log(typeof letters)