function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(`total number of vowels is ${count}`);
}

//Counting number of vowels using arrowfunction
const countvowels = (string) => {
  let count = 0;
  for (const char of string) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(`total number of vowels is ${count}`);
};
