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