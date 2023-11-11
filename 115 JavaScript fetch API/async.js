const display = document.getElementById("display");

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res)
  const data = await res.text();
  display.innerText = data;
}
