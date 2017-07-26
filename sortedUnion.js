function uniteUnique(arr) {
    var newArr = Array.from(arguments);
    endArr = [];
    for (var i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr[i].length; j++) {
            if (endArr.indexOf(newArr[i][j]) === -1) {
                endArr.push(newArr[i][j]);
            } else {
                endArr = endArr;
            }
        }
    }
    return endArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));