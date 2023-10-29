// will return undefined
function a(x, y) {
  return x * y;
}
console.log(a(3));
// default parameter
function a(x, y = 3) {
  return x * y;
}

console.log(a(3));

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x)

y = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(y)
// will not change the primitive value
function c(x , y){
  x = x * 4;
  return x * y
}

let m = 4;
let n = 3;
console.log(m)
console.log(c(m, n))
// will change the reference value.
function d(z){
  z.one = 6;
  return z.one * z.two
}

let f = {
  one : 4,
  two : 5,
}

console.log(d(f))
console.log(m)