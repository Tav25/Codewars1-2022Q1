function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = word;
  Array.from(word).forEach((el) => {
    // console.log(el)
    let re = new RegExp("\\" + el, "g");
    if (word.indexOf(el) === word.lastIndexOf(el)) {
      result = result.replace(re, "(");
    }
    result = result.replace(re, ")");
  });
  // .join("");
  return result;
}

console.log(duplicateEncode(" ( ( )")); //,"(((");
// console.log(duplicateEncode("dinD")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
// console.log(duplicateEncode("Success")); //,")())())","should ignore case");
// console.log(duplicateEncode("(( @")); // "))(("

// din
// recede
// Success
// CodeWarrior
// Supralapsarian

// !!k)Snb!OT!!lv
// // RRkRRRQHRRRR

// var newstr = "SupralapSarian".replace("S", "*");
// console.log(newstr);

// const str = "foo-bar-foo";

// // in older browsers

// var re = new RegExp("foo", "g");
// const result1 = str.replace(re, "moo");

// // ES12+
// // const result2 = str.replaceAll('foo', 'moo');

// // output: 'moo-bar'
// console.log(result1);
// // console.log(result2);
