const nums = [1, 2, 3];
const numbers = {
  one: 1,
  two: 2,
  three: 3,
};

const numIterator = nums[Symbol.iterator]();
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

// ! What is iterator?
// An Iterator is an object that has a property called symbol.iterator. By calling symbol.iterator we get an iterator and by calling its next function we can do looping.

// Bestially, a object is not iterable with this object we can make a object not iterable to iterable

const myNumbers = {};

myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done == true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let num of myNumbers){
}