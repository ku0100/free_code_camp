function findLongestWord(str) {
  var expression = /\w+/g; // match all words
  var newStr = str.match(expression); // add matches to new array
  var longestWord = ""; // initialize longestWord variable
  for (var i = 1; i < (newStr.length); i++) {
    if (newStr[i].length > longestWord.length) { // comparing each word in newStr's length against the current longest word length
      longestWord = newStr[i]; // replace longestWord if current word is longer
    } else {
      longestWord = longestWord; // if current word is shorter, don't adjust longestWord
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
