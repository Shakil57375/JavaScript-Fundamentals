const some = (hlw, ...rest) => {
  const result = rest.reduce((previous, current) => {
    return previous + current;
  }, 0);
  console.log(`${hlw} ${result}`);
};

some("the some is", 3, 5, 7, 8);
