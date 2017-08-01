function findElement(arr, func) {
    var num = 0;
    var newArr = arr.filter(function(num) {
        return num % 2 === 0;
    });
    return newArr[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));