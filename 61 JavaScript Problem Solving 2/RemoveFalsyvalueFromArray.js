// Remove Falsy value from the array and return the truthy values.
const truthyAndFalsy = [true, false, 1, 0, "Hello", "", {}, null, undefined];
// way-1
const trueArray = truthyAndFalsy.filter((el)=>{
    console.log(el)
    if(el){
        return true
    }else{
        return false
    }
})

console.log(trueArray)