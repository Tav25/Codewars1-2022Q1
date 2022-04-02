function sortByBit(arr) {
  let x = arr;
  x.forEach((el, indx) => {
    x[indx] = { num: el, bit: el.toString(2).replace(/0/gm, "").length };
  });
  x.sort((a, b) => {
    return a.bit - b.bit || a.num - b.num;
  }).forEach((el, indx) => {
    x[indx] = el.num;
  });
  return x;
}

// console.log(sortByBit([7, 6, 15, 8])); //[8, 6, 7, 15]

// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // => [1, 8, 3, 3, 5, 6, 9, 7]);

let a = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]; //[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
console.log(sortByBit(a));
console.log(a);

//!
function sortByBit(arr) {
  arr.sort(
    (a, b) =>
      a.toString(2).split`1`.length - b.toString(2).split`1`.length || a - b
  );
}

const sortByBit = (arr) =>
  arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, "") - b.toString(2).replace(/0/g, "") || a - b
  );
