function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (arr.length > howMany) {
    arr.splice(0, howMany);
    return arr;
  } else {
    arr = [];
    return arr;
  }
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
