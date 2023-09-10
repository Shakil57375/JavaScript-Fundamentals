// // কোন  Array থেকে duplicate নম্বর বের করার নিয়ম।

// const numbers = [1, 3, 2, 2, 14, 1, 4, 2, 3, 6, 8]
// const duplicates = numbers.filter((value, index, array)=>{
//     return array.indexOf(value) !== index
// })

// console.log(duplicates)

// কোন  Array থেকে unique নম্বর বের করার নিয়ম।

const numbers = [1, 3, 2, 2, 14, 1, 4, 2, 3, 6, 8]
const unique = numbers.filter((value, index, array)=>{
    return array.indexOf(value) === index
})

console.log(unique)