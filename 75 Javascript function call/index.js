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
// incase of normal function
// myFunction();
// incase of constructor function
const called = new myFunction("shakil", "hossain");
console.log(called)
// incase of function inside an object
// myObject.myFunction();