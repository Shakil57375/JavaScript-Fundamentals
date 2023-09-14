
// javascript logical operators
var a = 2;
var b = 5;
var c = 10;

if (a === 3 || a === 2) {
	console.log("TRUE");
} else {console.log("FALSE");}
if (a === 4 || b === 3 || c === 11) {
	console.log("TRUE");
} else {console.log("FALSE");}
if (b === 5 || c != 10) {
	console.log("TRUE");
} else {console.log("FALSE");}

/* Output:
TRUE
FALSE
TRUE
*/

const num = 6;
if (num <= 7 && num <= 8) {
    console.log('true')
} else {
    console.log('false')
}
//Expected output:true