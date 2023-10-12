const t0 = performance.now();
// doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// // Bad:
// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
// }

let arr = ["m", "s", "p"];
// Better Code:
let l = arr.length;
for (let i = 0; i < l; i++) {
  console.log(i);
}

/* Reduce DOM Access
Accessing the HTML DOM is very slow, compared to other JavaScript statements.

If you expect to access a DOM element several times, access it once, and use it as a local variable:

Example
const obj = document.getElementById("demo");
obj.innerHTML = "Hello"; */
