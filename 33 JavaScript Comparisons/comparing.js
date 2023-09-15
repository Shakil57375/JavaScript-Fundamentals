// Case	Value
// 2 < 12	true
// 2 < "12"	true
// 2 < "John"	false
// 2 > "John"	false
// 2 == "John"	false
// "2" < "12"	false
// "2" > "12"	true
// "2" == "12"	false
let age = 14;
age = Number(age)
if(isNaN(age)){
    console.log("input is not a number")
}
else{
    console.log(age < 18 ? "too young" : "Old enough" );
}