function solution(number) {
  //   console.log(`${number} `);
  if (number < 4) return 0;

  let fillArray = ((n) => {
    let arr = [];
    if (n) for (let i = 1; i <= n; ) arr.push(i++);
    return arr;
  })(number - 1)
    .filter((el) => {
      // console.log(el + ' >>>')
      if (el % 5 === 0 || el % 3 === 0) return el;
    })
    .reduce((a, b) => {
      return a + b;
    });

  return fillArray;
}

console.log(solution(10));
console.log(solution(-10));
console.log(solution(3));

//!

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
