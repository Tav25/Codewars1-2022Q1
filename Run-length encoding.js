var runLengthEncoding = function (str) {
  let arr = [];
  let count = 0;
  let counrtLet = 1;
  let result = Array.from(str);

  result.forEach((el, index) => {
    if (el === result[index + 1]) {
      counrtLet++;
      arr[count] = [counrtLet, el];
    } else {
      arr[count] = [counrtLet, el];
      count++;
      counrtLet = 1;
    }
  });

  //   console.log(arr.toString());
  return arr; // << fix this
};

console.log(runLengthEncoding(""));
console.log(runLengthEncoding("aab"));
console.log(runLengthEncoding("hello world!"));
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb");
// => [[34,'a'], [3,'b']]

//!

const runLengthEncoding = (str) =>
  (str.match(/(.)\1*/g) || []).map((val) => [val.length, val[0]]);

var runLengthEncoding = function (str) {
  return (str.match(/(.)\1*/g) || []).reduce(function (r, s) {
    return r.push([s.length, s[0]]), r;
  }, []);
};
