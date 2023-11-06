/* event listener Syntax
element.addEventListener(event, function, useCapture); */
function clickFunc() {
  console.log("clicked");
}
function overFunc(text) {
  console.log(text);
}

function myFunc(text) {
  console.log(text);
}
// const button = document.getElementById("myBtn");
// button.addEventListener("click", function () {
//   console.log("hlw");
// });
// ! another way
const button = document.getElementById("myBtn");
button.addEventListener("click", function () {
  overFunc("on mouse over");
});
button.addEventListener("mouseover", overFunc);

const container = document.getElementById("container");
const btn = document.getElementById("btn");

container.addEventListener(
  "click",
  function () {
    myFunc("hlw from div");
  },
  true
);

btn.addEventListener(
  "click",
  function () {
    myFunc("hlw from button");
  },
  true
);

document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
