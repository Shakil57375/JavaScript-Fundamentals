const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
  console.log(x.elements[i].value)
}
document.getElementById("demo").innerHTML = text;
