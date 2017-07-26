function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var boolObjects = [
                    true,
                    false,
                    ];
  for (var i = 0; i < boolObjects.length; i++) {
    if (boolObjects[i] === bool) {
        return true;
    }
  }
  return false;
}

console.log(booWho(null));
