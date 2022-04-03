function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";
  Array.from(word).forEach((el) => {
    if (word.indexOf(el) === word.lastIndexOf(el)) {
      console.log(el + " (");
      result = result + "(";
    } else {
      console.log(el + " )");
      result = result + ")";
    }
  });
  return result;
}

//!

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
