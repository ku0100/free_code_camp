function convertHTML(str) {
    // &colon;&rpar;
    var re = /[^\w\s]/g;
    var htmlEntities = {"&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "\"": "&quot;",
                        "'": "&apos;"};
    var symbols = str.match(re);
    var newStr = str;
    if (symbols !== null) {
        for (var key in htmlEntities) {
            for (var i = 0; i < symbols.length; i++) {
                if (symbols[i] === key) {
                    newStr = str.replace(re, htmlEntities[key]);
                    // return newStr;
                } else {
                    newStr = newStr;
                }
            }
            // return newStr;
        }
    }
    return newStr;
};


console.log(convertHTML("abc"));