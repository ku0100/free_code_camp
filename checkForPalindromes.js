
function palindrome(str) {
  // Good luck!

  var expression = /[a-zA-Z0-9]/g;
  var arrayStr = str.match(expression);

  console.log(arrayStr);

  var revArrayStr = arrayStr.slice().reverse();
  revArrayStr = revArrayStr.join("");
  arrayStr = arrayStr.join("");

  console.log(arrayStr);
  console.log(revArrayStr);
  if (arrayStr.toLowerCase() === revArrayStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("1 eye for of 1 eye."));
