const longestWord = (sentence) =>{
    let longestWord = ""
    const words = sentence.split(" ")
    words.forEach((value, index, array) =>{
        if(longestWord.length < value.length){
            longestWord = value
        }
    })
    return longestWord
}

console.log(longestWord("I am from Bangladesh. I hate this country"))