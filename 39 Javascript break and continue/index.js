/*continue is a keyword in JavaScript that is used inside loops to skip the
execution of the remaining statements in the current iteration of the loop
and move to the next iteration. */

// Here's an example:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// returns 0 1 3 4
let text = ""
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}
console.log(text)


const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(cars)