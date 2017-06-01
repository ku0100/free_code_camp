function mutation(arr) {
  var matchesItem = arr[1];
  var findMatchesItem = arr[0];
  var masterCount = 0;
  for (var i = 0; i < matchesItem.length; i++) {
    for (var j = 0; j < findMatchesItem.length; j++) {
      if (findMatchesItem[j] === matchesItem[i]) {
        masterCount += 1;
      } else {
        return false;
      }
    }
    if (masterCount === matchesItem) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(mutation(["hello", "hey"]));
