// function invocation.
class myFunction {
    constructor(arg1, arg2) {
        this.firstName = arg1;
        this.lastName = arg2;
    }
}
// function myFunction(arg1, arg2){
//     firstName = arg1;
//     lastName = arg2;
// }
// ! function invocation.
// incase of normal function
// myFunction();
// incase of constructor function
const called = new myFunction("shakil", "hossain");
console.log(called)
// incase of function inside an object
// myObject.myFunction();
// here this.firstName refers to a.firstName.
const a = {
    firstName : "Shakil",
    sleep : function(){
        console.log(`${this.firstName} is sleeping`)
    }
}
a.sleep()
// We can assume that a function doesn't require the keyword "window" since it's a hidden object.hea
//! A function can be considered as a type of method.
/* window{
    function eating(){
        console.log(`shakil is eating`)
    }
}

window.eating() */