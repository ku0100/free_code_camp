function dropElements(arr, func) {
    // Drop them elements.
    var staticArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            staticArr = arr.slice(i, arr.length);
            return staticArr;
        }
    }
    return staticArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));