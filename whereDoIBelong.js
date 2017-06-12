
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  var arrSort = arr;
  arrSort.sort(function(a, b) {
    return a - b;
  });
  return arrSort.indexOf(num);
}

console.log(getIndexToIns([2, 5, 10], 15));
