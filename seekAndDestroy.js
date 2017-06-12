
function destroyer(arr) {
  // Remove all the values
  var newArr = [].slice.call(arguments[0]);
  var endArr = [];
  for (var j = 1; j < arguments.length; j++) {
    endArr.push(arguments[j]);
  };
  for (i = 0; i < endArr.length; i++) {
    newArr = newArr.filter(function(item) {
      return item != endArr[i];
    });
  }
  return newArr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
