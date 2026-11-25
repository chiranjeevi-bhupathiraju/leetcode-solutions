var diagonalPrime = function (a) {
    let n = a.length;

    let max = 0;
    let e;
    for (let i = 0; i < n; i++) {
        e = a[i][i];
        if (isPrime(e)) max = Math.max(max, e);

        e = a[i][n - 1 - i];
        if (isPrime(e)) max = Math.max(max, e);
    }
    return max;
};

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) {
            return false;
        }
    return true;
}
