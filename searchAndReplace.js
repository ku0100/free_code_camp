function myReplace(str, before, after) {
    var x = str.indexOf(before);
    var y = x + (before.length - 1);
    var newBefore = [];
    var newAfter = [];

    for (i = 0; i < before.length; i++) {
        newBefore.push(before[i]);
    }
    for (j = 0; j < after.length; j++) {
        newAfter.push(after[j]);
    }

    if (newBefore[0] === newBefore[0].toUpperCase()) {
        newAfter[0] = newAfter[0].toUpperCase();
        newAfter = newAfter.join("");
    } else {
        newAfter = newAfter.join("");
    }

    var newStr = str.replace(before, newAfter);
    return newStr;
};

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
