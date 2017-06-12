
function destroyer(arr) {
  // Remove all the values
  var newArr = [];
  for (var j = 1; j < arguments.length; j++) {
    for (var i = 0; i < arguments[0].length; i++) {
      if (arguments[j] === arguments[0][i]) {
        newArr = newArr;
      } else {
        if (arguments[j + 1] === arguments[0][i]) {
          newArr = newArr;
        } else {
          newArr.push(arguments[0][i]);
        }
      }
    }
    return newArr;
  }
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
