function changeText() {
  const header = document.getElementById("heading");
  header.innerHTML = "hello world";
}

function changeTextWithThis(heading) {
  heading.innerHTML = "changed";
}

const btn = document.getElementById("btn");
btn.onclick = function () {
  console.log(Date());
};
