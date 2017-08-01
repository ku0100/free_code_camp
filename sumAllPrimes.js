function sumPrimes(num) {
    var total = [];
    var primeSum = 0;
    for (var i = 1; i < (num + 1); i++) {
        total.push(i);
    }

    for (var j = 0; j < total.length; j++) {
        if (total[j] > 7) {
            if (total[j] % 2 === 0) {
            } else if (total[j] % 3 === 0) {
            } else if (total[j] % 5 === 0) {
            } else if (total[j] % 7 === 0) {
            } else {
                primeSum += total[j];
            }
        } else if (total[j] > 2) {
            if (total[j] % 2 === 0) {
            } else {
                primeSum += total[j];
            }
        } else {
            primeSum += total[j];
        }
    }
    return primeSum - 1;
}

console.log(sumPrimes(10));