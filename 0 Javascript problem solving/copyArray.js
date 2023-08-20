const myArray = [2, 3, 4, 5, 6, 7, 8]
// way-1
const copyArray2 = [...myArray]
console.log(copyArray2);
// way-2
const copyArray3 = myArray.slice()
console.log(copyArray3);
// way-3
const copyArray4 = myArray.map(number => number)
console.log(copyArray4);
// way-4
const coppicedArray = []
for(let i = 0; i < myArray.length; i++){
    coppicedArray.push(myArray[i])
}

console.log(coppicedArray);