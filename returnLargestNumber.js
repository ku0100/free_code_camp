function largestOfFour(arr) {
  // You can do this!
  var largestArr = [];


  for (i = 0; i < arr.length; i++) {
    var currentMax = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > currentMax) {
          currentMax = arr[i][j];
        } else {
          currentMax = currentMax;
        };
      };
      largestArr.push(currentMax);
  };
  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
