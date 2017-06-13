
function rot13(str) { // LBH QVQ VG!
  var newStr = [];
  var x = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 78 && str.charCodeAt(i) > 64) {
      x = str.charCodeAt(i);
      x = x + 13;
      x = String.fromCharCode(x);
      newStr.push(x);
    } else if (str.charCodeAt(i) > 92 || str.charCodeAt(i) < 65) {
      newStr.push(str[i]);
    } else {
      x = str.charCodeAt(i);
      x = x - 13;
      x = String.fromCharCode(x);
      newStr.push(x);
    }
  }
  newStr = newStr.join('');
  return newStr;
  // return str.charCodeAt(4);
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
