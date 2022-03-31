function sortByBit(arr) {
  return arr
    .map((el) => {
      return { num: el, bit: el.toString(2).replace(/0/gm, "").length };
    })
    .sort((a, b) => {
      return a.bit - b.bit || a.num - b.num;
    })
    .map((el) => el.num);
}

console.log(sortByBit([7, 6, 15, 8])); //[8, 6, 7, 15]

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // => [1, 8, 3, 3, 5, 6, 9, 7]);


console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]))
