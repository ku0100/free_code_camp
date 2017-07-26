function fearNotLetter(str) {
    var strArr = str.split("");
    var charCodeArr = [];

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            var charCode = str.charCodeAt(i) + 1;
            return String.fromCharCode(charCode);
        }
    }
}

console.log(fearNotLetter("abcdefghjklmno"));
