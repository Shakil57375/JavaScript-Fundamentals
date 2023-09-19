// /*
// The for loop is very useful in JavaScript
// syntax:
// for (initializer; condition; increment) {
// 	code
// }
// */
// // print each number between 0 and 9
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// // for loops are useful when working with arrays
// let array = [ "a", "b", "c" ];
// // print each element in the array
// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// /*
// Often for loops start at 0 rather than 1
// because they are so commonly used with arrays.
// */
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

/* // find odd, even and prime number in an array by using for loop

const myArray = [1, 4, 5, 6 , 3 , 6, 3, 7, 32, 2, 5]
let oddNumbers = [];
let evenNumbers = [];
let primeNumbers = []
for(let i = 0; i < myArray.length; i++){
	if(myArray[i] % 2 === 0){
		evenNumbers.push(myArray[i])
	}
	if((myArray[i] % 2 !== 0) && (myArray[i] !== 1)){
		primeNumbers.push(myArray[i])
	}
	if(myArray[i] % 2 !== 0 ){
		oddNumbers.push(myArray[i])
	}
}
console.log(oddNumbers)
console.log(evenNumbers)
console.log(primeNumbers) */

const carNames = ["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Nissan", "Tesla"];

for(let i = 0; i < carNames.length; i++){
	console.log(carNames[i])
}

// for (expression 1; expression 2; expression 3) {
// 	// code block to be executed
//   }

let i = 2;
let len = carNames.length;
let text = "";
for (; i < len; i++) {
  text += carNames[i] + "<br>";
}

/* 
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
 */

/* 
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
 */