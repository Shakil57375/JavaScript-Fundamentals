let num1 = 5;
let str1 = "Hello";
let bool1 = true;

let num2 = num1; // num2 gets the value 5, not a reference to num1
num1 = 7;
console.log(num1);
console.log(num2);

let obj1 = { name: "John" };
let arr1 = [1, 2, 3];

let obj2 = obj1; // obj2 now refers to the same object as obj1
arr1.push(4); // Changes the content of arr1

let a = ["html", "css"];
let b = ["js", "python"];

b = a;
console.log(a);
console.log(b);
a.push("c++");
console.log(a);
console.log(b);
