// will hosted to the top
function hostedFunction(){
    return console.log("object")
}
// will not hosted to the top
const myFunc = function(a,b){
    return a*b
}

console.log(myFunc(3,3))
// self invoking functions.
(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x)
  })();