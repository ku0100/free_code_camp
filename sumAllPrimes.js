function sumPrimes(num) {
    var primeTotal = 0;
    var p = 2;
    var primeArr = []; // initialize prime arr
    
    function isPrime(x) {
        for (p = 2; p < x; p++) {
            if (x % p === 0) {
                return false;
            }
        }
        return true;
    }
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }

    for (var j = 0; j < primeArr.length; j++) {
        primeTotal = primeTotal + primeArr[j];
    }
    return primeTotal;
}

console.log(sumPrimes(977));