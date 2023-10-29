// will hosted to the top
function hostedFunction(){
    return console.log("object")
}
// will not hosted to the top
const myFunc = function(a,b){
    // console.log(arguments.length)
    return a*b
    // by default a function will return undefined.
}

console.log(myFunc(3,3))
console.dir( myFunc)