function binaryAgent(str) {
    var re = /[0-9]+/g;
    var arr = str.match(re);
    var newArr = [];

    function binaryCalc(binValue) {
        var total = 0;
        var max = 7;
        for (var j = 0; j < binValue.length; j++) {
            total = total + (binValue[j] * Math.pow(2, max));
            max -= 1;
        }
        newArr.push(String.fromCharCode(total));
    }

    for (var k = 0; k < arr.length; k++) {
        binaryCalc(arr[k]);
    }
    return newArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));