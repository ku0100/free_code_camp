function addTogether() {
    var args = arguments;
    var a = args[0];
    var b = args[1];
    function isNum(num) {
        return Number.isInteger(num);
    };

    if (isNum(a)) {
        if (isNum(b)) {
            return a + b;
        } else if (!b) {
            return function(b) {
                if (isNum(b)) {
                    return a + b;
                }
            };
        }
        return undefined;
    }
}

console.log(addTogether(2)(3));