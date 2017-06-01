function mutation(arr) {
  var counter = 0;
  var firstItemLower = arr[0].toLowerCase();
  var secondItemLower = arr[1].toLowerCase();
  for (var i = 0; i < secondItemLower.length; i++) {
    for (var j = 0; j < firstItemLower.length; j++) {
      if (firstItemLower.indexOf(secondItemLower[i]) < 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
