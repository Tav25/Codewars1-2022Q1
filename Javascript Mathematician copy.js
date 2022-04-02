function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(multiply(1)(2)(3)); // 6

function display(...temps) {
  console.log(temps);
  for (index in temps) {
    console.log(temps[index]);
  }
}

display(-2, -3, 4, 2, 5);
display(20, 23, 31);
