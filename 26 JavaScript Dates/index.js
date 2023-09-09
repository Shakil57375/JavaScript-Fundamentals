// Several ways to create a Date object
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday1 = new Date("1995-12-17T03:24:00");
let birthday2= new Date(1995, 11, 17); // the month is 0-indexed
let birthday3 = new Date(1995, 11, 17, 3, 24, 0);
let birthday4 = new Date(628021800000); // passing epoch timestamp

// To get Date, Month and Year or Time
let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
let [hour, minute, second] = new Date()
   .toLocaleTimeString("en-US")
   .split(/:| /);

// Two digit years map to 1900 – 1999
let date1 = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// Deprecated method; 98 maps to 1998 here as well
date.setYear(98); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setFullYear(98); // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)