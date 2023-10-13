// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩,৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের কর।
function fizzBuzz(number){
    for(let i = 1; i <= number; i++){
        if(i % 15 === 0){
            console.log(`${i} is fizzBuzz`)
        }
        else if(i % 3 === 0){
            console.log(`${i} is fizz`)
        }
        else if (i % 5 === 0){
            console.log(`${i} is fizz`)
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz(100)