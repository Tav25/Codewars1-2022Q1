function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  }

  return new Date(currentDate) <= new Date(expirationDate);
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); //, true);
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); //, false);
console.log(
  checkCoupon("123ablqc0", "123ablqc0", "July 5, 2000", "July 5, 2000")
); //, false);

// let date1 = new Date("September 5, 2014");
// let date2 = new Date("October 1, 2014");
// let day = date1 < date2;

// console.log(day); // 25

//!

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
