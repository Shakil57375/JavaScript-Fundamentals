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

