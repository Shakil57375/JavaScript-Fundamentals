function myFunction(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}
// incase of normal function
myFunction();
// incase of constructor function
new myFunction();
// incase of function inside an object
myObject.myFunction();