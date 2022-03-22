// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  strArr = Array.from(str.toLowerCase()).sort(); 
  return  !strArr.some((element) => strArr.join('').includes(element + element));
}

console.log(isIsogram("Dermatoglyphics")); //, true);
console.log(isIsogram("iIsogram")); //, true);

//!
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.

  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
