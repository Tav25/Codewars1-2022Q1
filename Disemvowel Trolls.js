// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   return Array.from(str)
//     .filter(
//       (word) =>
//         !["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"].includes(word)
//     )
//     .join("");
// }

let disemvowel = (str) => {
  return Array.from(str)
    .filter(
      (word) =>
        !["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"].includes(word)
    )
    .join("");
};

console.log(disemvowel("This website is for losers LOL!"));
console.log("Ths wbst s fr lsrs LL!");

//!
const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

disemvowel = (str) => str.replace(/[aeiou]/gi, "");

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}
