function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);
  if (arrayOfArrays === null) return 0;
  if (!Array.isArray(arrayOfArrays)) return 0;
  if (arrayOfArrays.length === 0) return 0;

  if (arrayOfArrays[0] === null) {
    return 0;
  }

  let trueLength = arrayOfArrays.length + 1;
  let summ = 0;
  let min = arrayOfArrays[0].length;
  let max = 1;
  arrayOfArrays.forEach((el) => {
    if (Array.isArray(el)) {
      if (el.length > 0) {
        summ = el.length + summ;
        if (el.length < min) min = el.length;
        if (el.length > max) max = el.length;
      }
    }
  });
  if (summ === 0 || summ === max) {
    return 0;
  }

  console.log(`min:${min} max:${max} sum:${summ}`);

  let result = (() => {
    let summa = 0;
    do {
      summa = min + summa;
      min++;
    } while (min <= max);

    return summa;
  })();

  console.log(result);

  let exp = result - summ;

  if (exp > 0) {
    function isBigEnough(element, index, array) {
      return element.length > 0;
    }
  }
  console.log(arrayOfArrays.every(isBigEnough)); // false
  if (!arrayOfArrays.every(isBigEnough)) exp = 0;
  // arrayOfArrays.every(isBigEnough)

  return exp;
}

//!
function getLengthOfMissingArray(arr) {
  return !arr ||
    (ar = arr.map((x, i) => (x ? x.length : 0)).sort((a, b) => a - b)).indexOf(
      0
    ) > -1
    ? 0
    : ar.filter((x, i) => x != i + ar[0]).concat([1])[0] - 1;
}

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map((a) => (a ? a.length : 0))
    .sort((a, b) => a - b);

  if (lengths.includes(0)) {
    return 0;
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1;
    }
  }

  return 0;
}
