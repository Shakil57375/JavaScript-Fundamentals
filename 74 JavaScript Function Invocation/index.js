// we can call a function in two ways:
// 1: by using the window object
// ! not recommended
function withWindow(){
    console.log("I am the function with window object")
}
// ! not recommended
window.withWindow()
function withoutWindow(){
    console.log("I am the function without window object")
}
withoutWindow()
// In JavaScript, the thing called this, is the object that "owns" the current code.
// The value of this, when used in a function is the object that "owns" the function.
function a(){
    console.log(this)
}

a()

const x = {
    a : function (){
        console.log(this)
    }
}

x.a()