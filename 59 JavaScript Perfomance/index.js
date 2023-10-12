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
/* //! Avoid Unnecessary Variables
Don't create new variables if you don't plan to save values.

Often you can replace code like this:

let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName; */

/* Delay JavaScript Loading
Putting your scripts at the bottom of the page body lets the browser load the page first.

While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.

The HTTP specification defines that browsers should not download more than two components in parallel.

An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.

If possible, you can add your script to the page by code, after the page has loaded:

Example
<script>
window.onload = function() {
  const element = document.createElement("script");
  element.src = "myScript.js";
  document.body.appendChild(element);
};
</script>
Avoid Using with
Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

The with keyword is not allowed in strict mode. */