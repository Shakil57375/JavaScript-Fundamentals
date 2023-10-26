const nums = [1,2,3]
const numbers = {
    one : 1,
    two : 2,
    three: 3
}

const numIterator = nums[Symbol.iterator]()
console.log(numIterator.next())
console.log(numIterator.next())
console.log(numIterator.next())
console.log(numIterator.next())

// ! What is iterator?
// An Iterator is an object that has a property called symbol.iterator. By calling symbol.iterator we get an iterator and by calling its next function we can do looping.

