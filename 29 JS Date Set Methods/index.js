/* 
Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
 */
// const d = new Date();
// d.setFullYear(2020);
// console.log(d)

// The setFullYear() method can optionally set month and day:
// Example
// const d = new Date();
// d.setFullYear(2020, 11, 3);
// console.log(d)

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)
