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
