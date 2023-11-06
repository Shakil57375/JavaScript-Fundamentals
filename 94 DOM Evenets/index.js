function changeText() {
  const header = document.getElementById("heading");
  header.innerHTML = "hello world";
}

function changeTextWithThis(heading) {
  heading.innerHTML = "changed";
}

const btn = document.getElementById("btn");
btn.onclick = setDate;
function setDate() {
  console.log(Date());
}

function upperCase() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}
