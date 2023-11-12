const person = {
    name : "Shakil",
    age : 21
}
console.log(person)
const stringify = JSON.stringify(person)
console.log(stringify)
const parse = JSON.parse(stringify)
console.log(parse)