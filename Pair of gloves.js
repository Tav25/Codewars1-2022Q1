function numberOfPairs(gloves) {
  let setGloves = new Set(gloves);
  let result = 0;
  setGloves.forEach((el) => {
    let sumG = 0;
    // console.log(el);
    sumG =
      gloves.filter((value) => {
        return value === el;
      }).length + sumG;
    sumG = Math.floor(sumG / 2);
    // console.log(sumG);
    result += sumG;
  });
  return result;
}

console.log(numberOfPairs(["red", "red"])); //,1])//,
console.log(numberOfPairs(["red", "green", "blue"])); //,0])//,
console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
); //,3]
