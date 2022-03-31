function getLengthOfMissingArray(arrayOfArrays) {
  let trueLength = arrayOfArrays.length + 1;
  let summ = 0;
  arrayOfArrays.map((el) => {
    // console.log(el.length);
    summ = el.length + summ;
  });
  if (summ === 0) {
    return summ;
  }
  return trueLength * ((trueLength + 1) / 2) - summ;
}

function getLengthOfMissingArray(arrayOfArrays) {
  return arrayOfArrays;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //  3
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //  2
console.log(getLengthOfMissingArray([[null], [null, null, null]])); //2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ])
); //  5

console.log(getLengthOfMissingArray([])); //0);
console.log(
  getLengthOfMissingArray([
    [0, 2, 0, 4, 3, 3],
    [4, 3],
    [2, 3, 0, 3],
    [3, 1, 3, 2, 1, 0, 3],
    [2, 2, 2, 3, 4],
    [4, 2, 3, 1, 3, 1, 3, 4],
  ])
); //0);

console.log(
  getLengthOfMissingArray(
    [ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]
    [ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]
    [ [ null ], [ null, null, null ] ]
    [ [ 'a', 'a', 'a' ],
      [ 'a', 'a' ],
      [ 'a', 'a', 'a', 'a' ],
      [ 'a' ],
      [ 'a', 'a', 'a', 'a', 'a', 'a' ] ]
    [ [ 5, 2, 9 ], [ 4, 5, 1, 1, 5, 6 ], [ 1, 1 ], [ 5, 6, 7, 8, 9 ] ]
    )
); //4);
