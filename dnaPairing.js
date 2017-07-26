function pairElement(str) {
    var strArr = str.split("");
    var basePairs = [
                    ["T","A"],
                    ["A","T"],
                    ["G","C"],
                    ["C","G"]
                    ];
    var finalArr = [];

    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < basePairs.length; j++) {
            if (basePairs[j][0] === strArr[i]) {
                finalArr.push(basePairs[j]);
            }
        }
    }

    return finalArr;
}

console.log(pairElement("TTGAG"));