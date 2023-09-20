const person = {fname:"John", lname:"Doe", age:25};
for(let x in person){
    // console.log(person[x])// to have all the values
    // console.log(person["fname"])// to have a single value multiple times
    console.log(person.fname)// to have a single value multiple times
}
//  do not use for in in an array
// use for in only in the object
const numbers = [45, 4, 9, 16, 25];
for(let number in numbers){
    console.log(numbers[number])
}