// কোনো Array থেকে কি ভাবে সব থেকে বড় string খুজেঁ বের করবেন  এবং তার index নাম্বার দেখাবেন?

const longestStrings = (AllNames)=>{
    let longesWord = ""
    for(name of AllNames){
        if(name.length > longesWord.length){
            longesWord = name
        }
    }
    return [longesWord, AllNames.indexOf(longesWord)]
}

console.log(
  longestStrings([
    "Hello, World!",
    "JavaScript is fun.",
    "Web development rocks!",
    "Coding is an art.",
    "OpenAI is amazing.",
    "Learning never stops.",
    "Explore, dream, discover.",
    "Think outside the box.",
    "Stay curious always.",
    "Keep it simple.",
  ])
);
