// In this example we misspelled "alert" as "adddlert" to deliberately produce an error:
// try {
//   adddlert("Welcome guest!");
// } catch (err) {
//   console.log(err);
// }
// JavaScript catches adddlert as an error, and executes the catch code to handle it.
// throw an error on javascript.
let x = 56;
try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw {
    message : "Too High Number",
    name : "High number"
  }
} catch (err) {
  console.log(err)
}
console.log("this is a test code")


// To know more about different kinds of error please visit.
// https://docs.google.com/document/d/16z9N862QMQq_UBLlYWAGAacxjFsRKX47WyPOSi38fTo/edit?usp=sharing

// To know about debugging an error please visit.
// https://docs.google.com/document/d/1-d3XMEy7J3xJ7ZFAggaM8_RLpNq_QyhJgG-8RZm-gQQ/edit?usp=sharing