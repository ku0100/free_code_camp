function steamrollArray(arr) {
    // I'm a steamroller, baby
    var newArr = [];

    function arrayChecker(inputArr) {
        if (inputArr.length === 0) {
            newArr = newArr;
        } else {
            for (var j = 0; j < inputArr.length; j++) {
                if (Array.isArray(inputArr[j])) {
                    arrayChecker(inputArr[j]);
                } else {
                    newArr.push(inputArr[j]);
                }
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arrayChecker(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(steamrollArray([1, [], [3, [[4]]]]));