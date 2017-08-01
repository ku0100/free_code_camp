function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var denominator = max;

  for (var i = max; i >= min; i--) { // this will keep adding the max (13 in this instance until the result is divisible by the next value
    if (denominator % i !== 0) {
      denominator += max; 
      i = max;
    } 
  }

  return denominator;  
}


console.log(smallestCommons([23, 18]));