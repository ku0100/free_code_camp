
function diffArray(arr1, arr2) {
  var newArr = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) ===  -1) {
      newArr.push(arr1[i]);
    } else {
      newArr = newArr;
    }
  };
  for (j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) ===  -1) {
      newArr.push(arr2[j]);
    } else {
      newArr = newArr;
    }
  };
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
