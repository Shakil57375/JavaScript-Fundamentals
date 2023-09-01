// toString() Method

// let a = 123;
// console.log(typeof a)
// console.log( typeof a.toString())

// The toExponential() Method

// let x = 9.656;
// x.toExponential(2); // 9.66e+0
// x.toExponential(4); // 9.6560.e+0
// x.toExponential(6); // 9.65600000.e+0

// The toFixed() Method

// let x = 9.656;
// x.toFixed(0); // 10
// x.toFixed(2); // 9.66
// x.toFixed(4); // 9.6560
// x.toFixed(6); // 9.656000

// The toPrecision() Method

// let x = 9.656;
// x.toPrecision();  // 9.656
// x.toPrecision(2); // 9.7
// x.toPrecision(4); // 9.656
// x.toPrecision(6); // 9.65600

// Converting Variables to Numbers

/* 
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	Description
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
*/

// Number()	Returns a number converted from its argument.
Number(true);   // 1
Number(false);// 0
Number("10");// 10
Number("  10");// 10
Number("10  ");// 10
Number(" 10  ");// 10
Number("10.33");// 10.33
Number("10,33");// NaN
Number("10 33");// NaN
Number("John");// NaN
// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
Number(new Date("2017-09-30")) // 1506729600000 
// parseInt()	Parses its argument and returns a whole number

parseInt("-10");      // -10
parseInt("-10.33");// -10
parseInt("10");// 10
parseInt("10.33");// 10
parseInt("10 20 30");// 10
parseInt("10 years");// 10
parseInt("years 10");// NaN

// parseFloat()	Parses its argument and returns a floating point number

parseFloat("10");        // 10
parseFloat("10.33"); // 10.33
parseFloat("10 20 30"); // 10
parseFloat("10 years"); // 10
parseFloat("years 10"); // NaN

// let x = Number.MAX_VALUE; // 1.7976931348623157e+308

let x = 6;
x.MAX_VALUE //undefined

// let x = Number.MIN_VALUE; // 5e-324

// let x = Number.NaN; //NaN