function unluckyDays(year) {
  let result = 0;
  for (i = 1; i <= 12; i++) {
    let testDate = new Date(`${year} ${i} 13`).getDay();
    if (testDate === 5) {
    //   console.log(testDate);
      result++;
    }
  }
  return result;
}

console.log(unluckyDays(1586)); //, 1, "should be: 1");
console.log(unluckyDays(1001)); //, 3, "should be: 3");
console.log(unluckyDays(2819)); //, 2, "should be: 2");
console.log(unluckyDays(2792)); //, 2, "should be: 2");
console.log(unluckyDays(2723)); //, 2, "should be: 2");
console.log(unluckyDays(1909)); //, 1, "should be: 1");
console.log(unluckyDays(1812)); //, 2, "should be: 2");
console.log(unluckyDays(1618)); //, 2, "should be: 2");
console.log(unluckyDays(2132)); //, 1, "should be: 1");
console.log(unluckyDays(2065)); //, 3, "should be: 3");

//!

function unluckyDays(year){
    return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
  }