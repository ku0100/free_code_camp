function convertHTML(str) {
    // &colon;&rpar;
    var re = /[^\w\s]/g;
    var htmlEntities = {"&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "\"": "&quot;",
                        "'": "&apos;"};
    var newStr = str.split("");
    for (var i = 0; i < newStr.length; i++) {
        for (key in htmlEntities) {
            if (newStr[i] === key) {
                newStr[i] = htmlEntities[key];
            }
        }
    }
    return newStr.join("");
};

console.log(convertHTML("<>"));