const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const findVowels = (sentence) =>{
    let count = 0;
    const letters = Array.from(sentence)
    letters.forEach((value, index, array)=>{
        if(vowels.includes(value)){
            count++
        }
    })
    return count
}

console.log(findVowels("Allah Loves them who are patient"))