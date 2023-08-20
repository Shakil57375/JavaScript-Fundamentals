// Convert any value to boolean
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

console.log(!!"mash");//true

// We can also use Boolean() to achieve same
console.log(Boolean("mash"));//true