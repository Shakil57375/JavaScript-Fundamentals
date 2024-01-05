// Truthy values

/*
	true
    {}
    []
    42
    "0"
    "false"
    new Date()
    -42
    12n
    3.14
    -3.14
    Infinity
    -Infinity
*/

// Falsy values

/*
  false
  0
  -0
  0n
  "", '', ``
  null
  undefined
  NaN
*/
let value = 'null' // Assigning an empty string

if (value) {
  console.log("Truthy"); // This block will not execute
} else {
  console.log("Falsy"); // This block will execute
}
