const some = (hlw, ...rest) => {
  const result = rest.reduce((previous, current) => {
    return previous + current;
  }, 0);
  console.log(`${hlw} ${result}`);
};

some("the some is", 3, 5, 7, 8);

const myArr = [2, 3,4 ]
myArr.push(4)
console.log(myArr)
console.log([...myArr, 4])