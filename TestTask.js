function lenVowels() {
    let words = Array.prototype.slice.call(arguments);
    return words
      .map((el) => {
        consonants = el.replace(/[aeiouyйуеыаоэяию]/gi, "");
        return { len: el.length - consonants.length, value: el };
      })
      .sort((a, b) => {
        return a.len - b.len;
      })
      .map((el) => el.value)
      .join(" ");
  }
  
  const test = lenVowels("тИгр", "pOlice", "GMC", "aeiouy", "aezakmi");
  console.log(test);
  // console.log(myConcat(15, 4, 55, 554));
  
  // function count(word) {
  //   return word.length + word;
  // }
  
  // console.log(count("yuyt"));
  
  // const numbers = [1, 4, 9];
  // const doubles = numbers.map((num) => num * 2);
  // console.log(doubles);
  // // теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]
  