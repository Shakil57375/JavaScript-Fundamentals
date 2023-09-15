const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const findVowels = (sentence) =>{
    let count = 0;
    const split = sentence.split("")
    // const array = Array.from(sentence)
    split.filter((value, index, array)=>{
        if(vowels.includes(value)){
            count++
        }
    })
    return count++
}

console.log(findVowels("This is my place"))