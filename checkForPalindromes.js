
function palindrome(str) {
  // Good luck!

  var expression = /[a-zA-Z0-9]/g; // set regex entries for what we are searching for (letters and/or numbers)
  var arrayStr = str.match(expression); // match any letters and/or numbers in the str input and create new array with matches

  console.log(arrayStr); // just a test to see what the output of arrayStr is

  var revArrayStr = arrayStr.slice().reverse(); // set another array to be reverse of original string
  revArrayStr = revArrayStr.join(""); // turn array into string for matching check
  arrayStr = arrayStr.join(""); // turn array into string for matching check

  console.log(arrayStr); // just a check
  console.log(revArrayStr); // just a check
  if (arrayStr.toLowerCase() === revArrayStr.toLowerCase()) { // equivalency check
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("1 eye for of 1 eye."));
