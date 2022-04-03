function nthFibo(n) {
  if (n === 0) return 0;
  mainArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  let lastNum = mainArr.length;
  if (n <= lastNum) {
    return mainArr[n - 1];
  } else {
    let i = 10;
    while (i <= n) {
      mainArr.push(mainArr[i - 1] + mainArr[i - 2]);
      i++;
    }
    return mainArr[n - 1];
  }
}

//!
function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

function nthFibo(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
}
