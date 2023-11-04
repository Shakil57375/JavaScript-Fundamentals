/* "I will finish later!"
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout() */
//.setTimeout() //executes the code after x seconds.
//.setInterval() //executes the code **every** x seconds.
var intervalID = setInterval(function(){
    console.log("hello")
}, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

setTimeout(alert, 1000); // Will alert once, after a second.
setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 2000);//run this thang every 2 seconds
console.log("line 1 code");
// ? we can pass a full function as an argument.
// setTimeout(function () {
//   console.log("line 2 code");
// }, 2000);
function displayer(){
    console.log("line 2 code")
}
 // ? When you pass a function as an argument, remember not to use parenthesis.

// * Right: setTimeout(myFunction, 3000);

// ! Wrong: setTimeout(myFunction(), 3000); 
// ! another way to set callback function.

setInterval(displayer, 2000)

console.log("Line 3 code");
