if(true){
    var varVariable = "This is var";
    var varVariable = "This is var variable again"
}

console.log(varVariable);

if(true){
    let letVariable = "This is let"
    console.log(letVariable)
}

/* `const` is a signal that the identifier won't be reassigned.
`let` is a signal that the variable may be reassigned,
such as a counter in a loop, or a value swap in an algorithm.
It also signals that the variable will be used only in the block
it's defined in, which is not always the entire containing function. */

/* Using Let, Var & Const
You can learn more about the variable declaration from Typescript variables tutorial. Use var and let to define any variable, with or without type or initial value. We use the const keyword initialize a constant whose value does not change. Hence we must initialize it with a value. */

// ⚡ Initialization
var a; //✅
let b; //✅
const c; //❌ const must have an initial value

// ⚡ Re-Assignment
var d = 1; 
d = 10; //✅

let e = 2; 
e = 20; //✅

const f = 3; 
f = 30 //❌ const value is always constant and cannot be reassigned

// ⚡ Re-Declaration
var g = 1; 
var g = 10; //✅

let h = 2; 
let h = 20; //❌ must use variable name only to reassign, cannot be reassigned 

const i = 3; 
const i = 30 //❌ cannot be reassigned

// ⚡ Scope [Global, Function or local and block scope]
// Global Scope ==> Any variable that is declared outside any of the function
// Function Scope(var) ==> Can be accessed inside the function it was declared and its child
// Block Scope(let and const) ==> Con be accessed inside curly brackets where it was declared and its child

function myFunction(){
    var myName1 = 'Asmita';
    let myName2 = 'Dikshit';
    const myName3 = 'Sizen';
    console.log(myName1);
    console.log(myName2);
    console.log(myName3);

    if(true){
        console.log(myName1);
        console.log(myName2);
        console.log(myName3);

        var myAge1 = 13;
        let myAge2 = 15;
        const myAge3 = 14;
        console.log(myAge1);
        console.log(myAge2);
        console.log(myAge3);
    }

    console.log(myName1);
    console.log(myName2);
    console.log(myName3);

    console.log(myAge1);
    console.log(myAge2);
    console.log(myAge3);
};
myFunction();
