function findLongestWord(str) {
  var expression = /\w+/g;
  var newStr = str.match(expression);
  // return newStr[1].length;
  var longestWord = "";
  for (var i = 1; i < (newStr.length + 1); i++) {
    if (newStr[i].length > newStr[i - 1].length) {
      longestWord = newStr[i];
    } else {
      longestWord = longestWord;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
