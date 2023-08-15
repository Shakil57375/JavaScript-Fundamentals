/* function sleep(name, doing){ //parameter
    console.log(name + " is " + doing + " now ");
}
sleep("Mah", "sleep")
sleep("Shakil", "scrolling Facebook") //arguments
sleep("Fa", "Going")
 */

// function myFunction(a, b){
//     console.log("object");
//     return a * b;
//     // return undefined // by default javaScript returns undefined.
// }

// let x = myFunction(4, 3)
// console.log(x);

// function toCelsius(fahrenheit){
//     return (5/9) * (fahrenheit - 32)
// }

// console.log(toCelsius(72));

// function toCelsius(fahrenheit){
//     return (5/9) * (fahrenheit - 32)
// }

// console.log(toCelsius);// if we didn't use () then it will return an object. By default everything in javascript is a object.

// console.log(toCelsius);// If you access a method without the () parentheses, it will return the function definition.


let name = "hossain"
function myFunc(){
    let name  = "shakil"
    console.log(name); //shakil
}

myFunc()

console.log(name);// hossain
// name will not be accessible here because it's a functional scope.