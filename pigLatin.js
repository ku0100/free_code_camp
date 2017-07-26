
function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var strArr = str.split("");
    var matchIndex = "";
    var emptyArr = [];

    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (strArr[0] === vowels[j]) {
                strArr.push("way");
                return strArr.join("");
            }
            if (strArr[i] === vowels[j]) {
                matchIndex = i;
                for (var k = matchIndex; k < strArr.length; k++) {
                    emptyArr.push(strArr[k]);
                }
                for (var l = 0; l < matchIndex; l++) {
                    emptyArr.push(strArr[l]);
                }
                emptyArr.push("ay");
                return emptyArr.join("");
            } 
        }
    }
}

console.log(translatePigLatin("california"));
