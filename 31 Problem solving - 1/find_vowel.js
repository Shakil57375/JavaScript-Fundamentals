// কোনো sentece এ কত গুলো vowel আছে তা নির্নয় করা যায় কি ভাবে?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
const findVowels = (sentence) =>{
    let count = 0;
    const letters = Array.from(sentence)
    letters.forEach(function(value, index, array){
        if(vowels.includes(value)){
            count++
        }
    })
    return count
}

console.log(findVowels("I am a muslim"))