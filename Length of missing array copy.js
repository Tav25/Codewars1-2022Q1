function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);
 if (arrayOfArrays === null) return 0;
 if (!Array.isArray(arrayOfArrays)) return 0;
 if (arrayOfArrays.length === 0) return 0;
 
  if (arrayOfArrays[0]===null) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RRRRRRRRR00000000000")
   return 0 ;
 }
 
 let trueLength = arrayOfArrays.length + 1;
 let summ = 0;
 let min = arrayOfArrays[0].length;
 let max = 1;
 arrayOfArrays.forEach((el) => {
 if(Array.isArray(el)){
   if(el.length > 0 ) {
    console.log(">>>>w>2")
   summ = el.length + summ;
     console.log(">>>w>>2")
   if (el.length < min) min = el.length;
   if (el.length > max) max = el.length;
      }
 else{
   console.log('<<<<<<<<<<<<<<<<')
 }
 };
 });
 if (summ === 0 || summ === max) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RRRRRRRRR00000000000")
   return 0 ;
 }
 
 
 console.log(`min:${min} max:${max} sum:${summ}`);
 
 let result = (() => {
   let summa = 0;
   do {
     summa = (min) + summa;
     min++
   } while (min <= max);
   
   return summa;
 })();
 
 console.log(result);
 console.log(result - summ + ' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RRRRRRRRR');
 return result - summ;
}

// let d = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
// let d = [([5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9])];
// let d = [([null], [null, null, null])][
//   (["a", "a", "a"],
//   ["a", "a"],
//   ["a", "a", "a", "a"],
//   ["a"],
//   ["a", "a", "a", "a", "a", "a"])
// ];
let d = [
  [5, 2, 9],
  [4, 5, 1, 1, 5, 6],
  [1, 1],
  [5, 6, 7, 8, 9],
];

let c = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];

getLengthOfMissingArray(d);
console.log(">>>>>>>>>>>>>>>>");
getLengthOfMissingArray(c);
