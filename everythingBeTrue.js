function truthCheck(collection, pre) {
    // Is everyone being true?
    var falsy = [false, 0, "", null, undefined, NaN];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre)) {
            if(falsy.indexOf(collection[i][pre]) === -1) {
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
