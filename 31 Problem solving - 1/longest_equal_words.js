const longestWord = (sentence) => {
  let words = sentence.split(" ");
  let size = 0;
  let max = [""];
  words.forEach((value, index, array) => {
    if (value.length >= size) {
      size = value.length;
      if (max[max.length - 1].length < value) {
        max = [];
        max.push(value);
      } else {
        max = [...max, value];
      }
    }
  });
  return [...max];
};

console.log(longestWord("this is my word"));
