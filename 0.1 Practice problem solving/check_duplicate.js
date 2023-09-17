const numbers = [2, 3, 4, 5, 4, 5, 6, 4, 3]

const findDuplicates = numbers.filter((value, index, array)=>{
    return array.indexOf(value) !== index
})
console.log(findDuplicates)