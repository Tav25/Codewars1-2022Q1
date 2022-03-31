function head(arr) {
  return arr[0];
}

function last(arr) {
  let newArr = arr.slice();
  return newArr.length < 1 ? null : arr.pop();
}

function init(arr) {
  let newArr = arr.slice();
  return newArr.length < 1 ? [] : arr.slice(0, -1);
}

function tail(arr) {
  let newArr = arr.slice();
  return newArr.length < 1 ? [] : arr.slice(1);
}

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

console.log(head([5, 1])); //, 5 );
console.log(last([7, 2])); //, 2 );
console.log(init([1, 5, 7, 9])); //, [1,5,7] );
console.log(tail([1])); // [] );
console.log(tail([1, 5, 7, 9])); //, [5,7,9] );

// console.log([0,4,5,48,4,85].at(-1))
