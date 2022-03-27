// using System;
// using System.Linq;

function explode(s) {
  let result = "";
  for (dig of s) {
    for (let i = 0; i < dig; i++) {
      result = result + dig;
    }
  }
  return result;
}

console.log(explode("312")); //, "333122"))
console.log(explode("102269")); //, "12222666666999999999")];

//!
const explode = (s) => s.replace(/\d/g, (d) => d.repeat(d));

function explode(s) {
  return s
    .split("")
    .map((e) => e.repeat(+e))
    .join("");
}

explode = (s) => [...s].map((n) => n.repeat(n)).join``;
