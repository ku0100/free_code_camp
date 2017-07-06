
function sumAll(arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  var total = 0;
  for (var i = min; i < (max + 1); i++) {
    total = total + i;
  }
  return total;
};

console.log(sumAll([1, 4]));
