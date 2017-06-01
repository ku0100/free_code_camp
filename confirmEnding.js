
function repeatStringNumTimes(str, num) {
  // repeat after me
  var arr = [];
  var i = 0;
  while (i < (num)) {
    arr.push(str);
    i++;
  }
  return arr.join("");
}

console.log(repeatStringNumTimes("abc", 3));
