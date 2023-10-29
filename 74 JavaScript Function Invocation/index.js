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