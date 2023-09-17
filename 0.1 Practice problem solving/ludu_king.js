const createRandomNumbers = ((max, min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min
})

console.log(createRandomNumbers(1,6))