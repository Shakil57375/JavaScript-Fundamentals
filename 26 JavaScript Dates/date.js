const date = new Date()
// console.log(date)
// The getFullYear() Method
/* 
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
// The getFullYear() method returns the year of a date as a four digit number:
const y = new Date("2021-03-25");
// console.log(y.getFullYear());//2021
// The getMonth() Method
// The getMonth() method returns the month of a date as a number (0-11).
const m = new Date();
// console.log(m.getMonth())// 8 The [getMonth() method returns the month of a date as a number (0-11)].

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date("2021-03-25");
// let month = months[d.getMonth()];
// console.log(month)

// 6 numbers specify year, month, day, hour, minute, second
// const d = new Date(2014, 11, 24, 10, 33, 30);
// console.log(d)
// 5 numbers specify year, month, day, hour, minute
// const d = new Date(2014, 11, 24, 10, 33, 30);
// console.log(d)
// 4 numbers specify year, month, day, hour
// const d = new Date(2014, 11, 24, 10, 33, 30);
// console.log(d)

// const d = new Date();
// console.log(d.getSeconds())
const d = new Date();
console.log(d.toUTCString())