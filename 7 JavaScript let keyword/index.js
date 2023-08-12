/* 
The let keyword was introduced in ES6 (2015)

Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have Block Scope
 */
let x = "John Doe";

// let x = 0; let cannot be redeclare
// but you can do it with var

// global scope
var y;
y = 3;

// function scope
function myFunc(){

}

// block scope
if(a===b){
    let x = 3;
}