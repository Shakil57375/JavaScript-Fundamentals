//nullish coalescing operator in js
Expression:
	// Left ?? Right
// if left is null or undefined , then Right will be the value

var value = null ?? "Oops.. null or undefined";
console.log(value) //Oops.. null or undefined

value = undefined ?? "Oops.. null or undefined";
console.log(value) //Oops.. null or undefined

value = 25 ?? "Oops.. null or undefined";
console.log(value) // 25

value = "" ?? "Oops.. null or undefined";
console.log(value) // ""
8

const val = false
const res = val  || "hlw"
console.log(res)