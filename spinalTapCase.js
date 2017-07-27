function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var reSpace = /\s/g;
    var reCapital = /[a-z](?=[A-Z])/g;
    var reUnderscore = /_/g;
    var newStr = str.replace(reCapital, "$& ");
    newStr = newStr.split("");
    for (var i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].toLowerCase();
    }
    newStr = newStr.join("");
    newStr = newStr.replace(reSpace, "-");
    newStr = newStr.replace(reUnderscore, "-");
    return newStr;
}

console.log(spinalCase('The_Andy_Griffith_Show'));
