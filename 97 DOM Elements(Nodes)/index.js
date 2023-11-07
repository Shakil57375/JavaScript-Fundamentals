const para = document.createElement("p");
const node = document.createTextNode("Hello World");
// way-1
// const nodeText = para.appendChild(node) // <p>Hello World</p>
// way-2
para.appendChild(node); // <p>Hello World</p>
const element = document.getElementById("div1");
// way-1
// element.appendChild(nodeText)
// way-2
element.appendChild(para);
// if you want to insert the element you have created at the first instead of last you can use insertBefore() function
