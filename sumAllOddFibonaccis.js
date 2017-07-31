function sumFibs(num) {
    var firstNum = 1;
    var sum = 0;
    var fibTotal = 0;

    while (firstNum < num) {
        sum = sum + firstNum;
        firstNum = sum;
        if (firstNum % 2 !== 0) {
            fibTotal = fibTotal + firstNum;
            continue;
        }
    }

    return fibTotal;




    // for (var i = 0; i < num; i++) {
    //     sum = sum + firstNum;
    //     firstNum = sum;
    //     if (firstNum % 2 !== 0) {
    //         fibTotal = fibTotal + firstNum;
    //     }
    // }
    // return fibTotal;
}

console.log(sumFibs(1000));