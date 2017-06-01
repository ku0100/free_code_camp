
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrCount = Math.floor(arr.length/size);
  var newArr = [];
  var originalSize = size;
  var initial = 0;
  if (arr.length % size === 0) {
    for (var i = 0; i < arrCount; i++) {
      newArr.push(arr.slice(initial, size));
      initial = initial + originalSize;
      size = size + originalSize;
    }
  } else {
      for (var i = 0; i < arrCount; i++) {
        newArr.push(arr.slice(initial, size));
        initial = initial + originalSize;
        size = size + originalSize;
      }
      newArr.push(arr.slice(-(arr.length % originalSize)));
    }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
