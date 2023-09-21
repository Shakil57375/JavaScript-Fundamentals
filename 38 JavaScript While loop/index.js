// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.
// const numbers = [3, 4, 8, 9, 2];
// let number = 0;
// while (number < numbers.length) {
//   const getNumbers = numbers[number];
//   console.log(getNumbers);
//   number++;
// }
// //Expected output:3 4 8 9 2
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //  while loop
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

//do-while loop
// let k=0;
// do{
//     console.log(arr[k]);
//     k++;
// }
// while(k < arr.length);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
console.log(text)