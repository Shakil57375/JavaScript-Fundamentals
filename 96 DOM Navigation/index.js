 // way: 1 The value of the text node can be accessed by the node's innerHTML property:
 let myPera = document.getElementById("demo").innerHTML;
 // way: 2 Accessing the innerHTML property is the same as accessing the nodeValue of the first child:
 let myPera2 = document.getElementById("demo").firstChild.nodeValue;
 // way: 3  Accessing the first child can also be done like this:
 let myPera3 = document.getElementById("demo").childNodes[0].nodeValue;
 let myPera4 = document.getElementById("demo").childNodes[0].nodeName; // readonly
 console.log(myPera, myPera2, myPera3, myPera4);
 document.getElementById("id02").innerHTML =
   document.getElementById("id01").innerHTML;

   /* document.body - The body of the document
document.documentElement - The full document */
console.log(document.body) // will get the body
console.log(document.documentElement) // will get all the element

/* The nodeName Property
The nodeName property specifies the name of a node.

nodeName is read-only
nodeName of an element node is the same as the tag name
nodeName of an attribute node is the attribute name
nodeName of a text node is always #text
nodeName of the document node is always #document */