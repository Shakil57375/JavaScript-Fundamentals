function validateForm() {
  const form = document.forms["myForm"];
  // accessing the object element with the bracket notation only
  // const value = form["fname"]["value"];
  // accessing the object element with bracket and dot notation because fname is a dynamic value that's why we have to use bracket notation to access it whereas value is a normal value that's why we don't have to use bracket notation. but if we want we can use bracket notation to access the value.
  const value = form["fname"].value;
  if (value == "") {
    alert("Name must be filled out");
    return false;
  }
}

const myFunction = () => {
  const number = document.getElementById("numIn").value;
  let text;
  if (isNaN(number)) {
    text = "input a number please";
  } else {
    text = "OK";
  }
  document.getElementById("demo").innerHTML = text;
};
