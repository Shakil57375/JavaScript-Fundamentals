let a = 10;
let b = 5;
if (a) {
  return true;
} else {
  return false;
}

// this alls are truthy values including empty object and array,
// excluding empty string (empty string is falsy value)
if ([]) {
  console.log("✅ This runs");
}

if ({}) {
  console.log("✅ This runs");
}

if (true) {
  console.log("✅ This runs");
}

if ("test") {
  console.log("✅ This runs");
}

//a list of truthy js expressions:
if (true)
if ({})
  if ([])
    if (42)
      if (3.14)
        // true is truthy
        if (-3.14)
          // any object is truthy
          if (Infinity)
            // any array is truthy
            if (-Infinity)
              // any number that is not 0 or -0 is truthy
              if (12n)
                if ("0")
// infinity is truthy
// so is -infinity
// any non empty string is tr
// Falsy values in JavaScript:
// false
// 0
// '', "", ``
// null
// undefined
// NaN

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
