(1).toString(); // "1"
parseFloat("123"); // 123

String(1); // "1"
Number("123"); // 123
/* 
let y = "5";      // y is a string
let x = + y;      // x is a number */

let y = "John"; // y is a string
let x = +y; // x is a number (NaN)

x = 4;

/* x.toString()
(123).toString()
(100 + 23).toString()


String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression


// The global method Number() can be used to convert dates to numbers.

d = new Date();
Number(d)          // returns 1404568027739
 */

// The global method String() can convert dates to strings.

console.log(String(new Date())); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

/* Automatic Type Conversion
When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect: */

5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2


