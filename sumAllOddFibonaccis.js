function sumFibs(num) {
    var firstNum = 1;
    var sum = 0;
    var fibTotal = 0;

    while (firstNum <= num) {
        if (firstNum % 2 !== 0) {
            fibTotal += firstNum
        }

        firstNum += sum;
        sum = firstNum - sum;
    }

    return fibTotal;
}

console.log(sumFibs(3));