console.log(calculate(1)(1)); // 2);
console.log(calculate(1, 1)(1)); //, 3);
console.log(calculate(1, 1)(1, -1)); // 2);

function calculate(...a) {
  return (...b) => {
    return reducer(...a) + reducer(...b);
  };

  function reducer(...a) {
    return a.reduce(function (a, b) {
      return a + b;
    });
  }
}

// function reducer(...a) {
//   return a.reduce(function (a, b) {
//     return a + b;
//   });
// }

// console.log(reducer(3, 7, 1)); // 17);

//!

const calculate =
  (...args1) =>
  (...args2) =>
    [...args1, ...args2].reduce((s, v) => s + v);

function calculate(...a) {
  return function (...b) {
    return [...a, ...b].reduce((sum, n) => sum + n);
  };
}

function calculate(...xa) {
  return (...xb) => xa.concat(xb).reduce((a, b) => a + b, 0);
}
