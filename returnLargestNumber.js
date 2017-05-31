function largestOfFour(arr) {
  // You can do this!
  var largestArr = []; // intialize a blank array that max values will be pushed to
  for (i = 0; i < arr.length; i++) { // loop over every array in the provided array
    var currentMax = 0;
    for (j = 0; j < arr[i].length; j++) { // for each array within an array, loop over each value
      if (arr[i][j] > currentMax) { // if the looped value is larger than the current max (initialized to 0)
          currentMax = arr[i][j]; // set new max
        } else {
          currentMax = currentMax; // otherwise the max stays the same
        };
      };
      largestArr.push(currentMax); // after the array within an array has been looped through, push that array's current max
  };
  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
